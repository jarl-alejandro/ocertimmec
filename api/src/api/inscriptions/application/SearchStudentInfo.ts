import { StudentInfo } from "../domain/StudentInfo";
import { StudentInfoRepository } from "../domain/StudentInfoRepository";

export class SearchStudentInfo {
  
  constructor(
    private readonly studentInfoRepository: StudentInfoRepository
  ) {}

  public find(identity: string): Promise<StudentInfo> {
    if (!identity) {
      throw new Error('Missing identity to find student');
    }
    return this.studentInfoRepository.findStudentInfo(identity);
  }

}