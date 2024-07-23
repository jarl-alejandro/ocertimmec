import { ExternalSystemStrategy } from "./ExternalSystemStrategy";
import { StudentInfo } from "../domain/StudentInfo";
import axios from 'axios';

export class SriExternalSystemStrategy implements ExternalSystemStrategy {
  public async find (identity: string): Promise<StudentInfo> {
    const uri = `https://srienlinea.sri.gob.ec/movil-servicios/api/v1.0/deudas/porIdentificacion/${identity}`;

    try {
      const response = await axios.get(uri);

      const taxpayer = response.data?.contribuyente || {};
      const fullName = taxpayer?.nombreComercial || '';
      const fullNameArray = fullName.split(' ');

      return {
        identity: taxpayer.identificacion || '',
        name: `${fullNameArray[2]} ${fullNameArray[3]}`,
        lastName: `${fullNameArray[0]} ${fullNameArray[1]}`,
        lastInscription: null
      } as StudentInfo;

    } catch (error) {
      console.error('Error fetching data:', error);
    }
    return null;
  }

}