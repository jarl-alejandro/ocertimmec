import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '../Select';
import MenuItem from '@mui/material/MenuItem';

const CondicionVida = ({ state, setField }) => (
	<div className="table-container">
		<table>
			<tbody>
			<tr>
				<td width="50%" className="table-title">USTED O SU FAMILIA POSEE DE UN SEGURO MEDICO</td>
				<td width="40%">
					<Select name="seguroMedico" value={state.seguroMedico} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">TIENE HIJOS</td>
				<td width="40%">
					<Select name="hijos" value={state.hijos} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">CUANTOS HIJOS TIENE</td>
				<td width="40%">
					<Select name="cuantoHijos" value={state.cuantoHijos} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="1">1</MenuItem>
						<MenuItem value="2">2</MenuItem>
						<MenuItem value="3">3</MenuItem>
						<MenuItem value="4">4</MenuItem>
						<MenuItem value="5">5</MenuItem>
						<MenuItem value="6">6</MenuItem>
						<MenuItem value="7">7</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">HIJOS MAYORES DE 3 AÑOS Y MENORES DE 18 AÑOS</td>
				<td width="40%">
					<Select name="hijosMayorTres" value={state.hijosMayorTres} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="1">1</MenuItem>
						<MenuItem value="2">2</MenuItem>
						<MenuItem value="3">3</MenuItem>
						<MenuItem value="4">4</MenuItem>
						<MenuItem value="5">5</MenuItem>
						<MenuItem value="6">6</MenuItem>
						<MenuItem value="7">7</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">ASISTEN ACTUALMENTE A ALGUNA INSTITUCION EDUCATIVA</td>
				<td width="40%">
					<Select name="estudian" value={state.estudian} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">CUANTAS PERSONAS SON MIEMBRO DE SU HOGAR</td>
				<td width="40%">
					<Select name="miembrosHogar" value={state.miembrosHogar} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="1">1</MenuItem>
						<MenuItem value="2">2</MenuItem>
						<MenuItem value="3">3</MenuItem>
						<MenuItem value="4">4</MenuItem>
						<MenuItem value="5">5</MenuItem>
						<MenuItem value="6">6</MenuItem>
						<MenuItem value="7">7</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">SU VIVIENDA ES PROPIA O ARRIENDA</td>
				<td width="40%">
					<Select name="propiedad" value={state.propiedad} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="PROPIA">PROPIA</MenuItem>
						<MenuItem value="ARRENDADA">ARRENDADA</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">SERVICIOS BASICO A LOS QUE TIENE ACCESO USTED Y SU FAMILIA</td>
				<td width="40%">
					<Select name="servicioBaSIco" value={state.servicioBaSIco} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="AGUA, LUZ, TELÉFONO">AGUA, LUZ, TELÉFONO</MenuItem>
						<MenuItem value="AGUA, LUZ">AGUA, LUZ</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">TIENE DISCACIDAD</td>
				<td width="40%">
					<Select name="discapacidad" value={state.discapacidad} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">TIPO DE DISCAPACIDAD</td>
				<td width="40%">
					<TextField
						variant="filled"
						type="text"
						name="tipoDiscapacidad"
						value={state.tipoDiscapacidad}
						onChange={setField}
					/>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">DESEA SER PARTE DE SOCIO EMPLEO</td>
				<td width="40%">
					<Select name="socioEmpleo" value={state.socioEmpleo} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
);

export default CondicionVida;
