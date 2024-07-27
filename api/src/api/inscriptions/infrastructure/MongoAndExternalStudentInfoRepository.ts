import { ExternalSystemStrategy } from "./ExternalSystemStrategy";
import { SriExternalSystemStrategy } from "./SriExternalSystemStrategy";
import type { Student } from "../domain/student";
import StudentEntity from '../domain/student';
import { StudentInfo } from "../domain/StudentInfo";
import { StudentInfoRepository } from "../domain/StudentInfoRepository";
import {FindInscriptionCommand} from "../domain/FindInscriptionCommand";

export class MongoAndExternalStudentInfoRepository implements StudentInfoRepository {

  public async findStudentInfo (command: FindInscriptionCommand): Promise<StudentInfo> {
		let studentEntity: Student | null = await StudentEntity.findOne({
			document: command.document,
			...(command.isCertificate ? { certificateId: command.courseId } : { trainingId: command.courseId })
		}).sort({ fechaAceptacion: -1 });

		if (!studentEntity) {
			studentEntity = await StudentEntity.findOne({ document: command.document }).sort({ fechaAceptacion: -1 });
		}

    const externalSystemStrategies: ExternalSystemStrategy[] = [
      new SriExternalSystemStrategy(),
    ]

    if (!studentEntity) {
      for (const externalSystemStrategy of externalSystemStrategies) {
        const findStudent = externalSystemStrategy.find(command.document);
        if (!!findStudent) {
          return findStudent;
        }
      }

      return null;
    }

    return {
      identity: studentEntity.document,
      name: studentEntity.name,
      lastName: studentEntity.lastName,
      lastInscription: studentEntity
    } as StudentInfo;
  }

}
