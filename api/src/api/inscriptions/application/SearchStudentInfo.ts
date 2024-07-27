import { StudentInfo } from "../domain/StudentInfo";
import { StudentInfoRepository } from "../domain/StudentInfoRepository";
import {FindInscriptionCommand} from "../domain/FindInscriptionCommand";

export class SearchStudentInfo {
  
  constructor(
    private readonly studentInfoRepository: StudentInfoRepository
  ) {}

  public find(document: string, courseId: string, isCertificate: boolean): Promise<StudentInfo> {
    if (!document) {
      throw new Error('Missing identity to find student');
    }

		const command: FindInscriptionCommand = {
			document: document,
			courseId: courseId,
			isCertificate: isCertificate,
		};
    return this.studentInfoRepository.findStudentInfo(command);
  }

}
