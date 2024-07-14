import { InscriptionCommand } from "../domain/InscriptionCommand";
import StudentEntity from '../domain/student'
import type { Student } from '../domain/student'
import { transformInscriptionToStudent } from './transformInscriptionToStudent'

export class CreateInscription {

  public async create(command: InscriptionCommand) {
    const studentData = transformInscriptionToStudent(command);
    const student: Student = new StudentEntity(studentData);
    try {
      await student.save();
      console.log('Inscription saved successfully');
    } catch (error) {
      console.error('Error saving inscription:', error);
    }
  }

}