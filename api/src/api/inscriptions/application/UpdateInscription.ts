import {InscriptionCommand} from "../domain/InscriptionCommand";
import {transformInscriptionToStudent} from "./transformInscriptionToStudent";
import StudentEntity, {Student} from "../domain/student";

export class UpdateInscription {
	public async update(id: string, command: InscriptionCommand) {
		const studentData = transformInscriptionToStudent(command);

		try {
			await StudentEntity.findByIdAndUpdate(id, studentData, { new: true });
			console.log('Inscription saved successfully');
		} catch (error) {
			console.error('Error saving inscription:', error);
		}
	}

}
