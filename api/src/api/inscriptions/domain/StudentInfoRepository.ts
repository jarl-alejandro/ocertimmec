import { StudentInfo } from "./StudentInfo";
import {FindInscriptionCommand} from "./FindInscriptionCommand";

export interface StudentInfoRepository {
  findStudentInfo: (command: FindInscriptionCommand) => Promise<StudentInfo>;
}
