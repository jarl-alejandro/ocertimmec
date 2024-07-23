import { StudentInfo } from "./StudentInfo";

export interface StudentInfoRepository {
  findStudentInfo: (identity: string) => Promise<StudentInfo>;
}