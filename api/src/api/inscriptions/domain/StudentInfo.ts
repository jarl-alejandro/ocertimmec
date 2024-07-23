import type { Student } from './student';

export interface StudentInfo {
  identity: string;
  name: string;
  lastName: string;
  lastInscription?: Student;
}