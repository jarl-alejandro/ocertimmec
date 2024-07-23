import { ExternalSystemStrategy } from "./ExternalSystemStrategy";
import { SriExternalSystemStrategy } from "./SriExternalSystemStrategy";
import type { Student } from "../domain/student";
import StudentEntity from '../domain/student';
import { StudentInfo } from "../domain/StudentInfo";
import { StudentInfoRepository } from "../domain/StudentInfoRepository";

export class MongoAndExternalStudentInfoRepository implements StudentInfoRepository {

  public async findStudentInfo (identity: string): Promise<StudentInfo> {
    const studentEntity: Student | null | undefined = await StudentEntity.findOne({
      document: identity
    });

    console.log(studentEntity)

    const externalSystemStrategies: ExternalSystemStrategy[] = [
      new SriExternalSystemStrategy(),
    ]

    if (!studentEntity) {
      for (const externalSystemStrategy of externalSystemStrategies) {
        const findStudent = externalSystemStrategy.find(identity);
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