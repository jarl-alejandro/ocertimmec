import { StudentInfo } from "../domain/StudentInfo";

export interface ExternalSystemStrategy {
  find: (identity: string) => Promise<StudentInfo>;
}