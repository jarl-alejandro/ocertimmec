import React from 'react';
import Select from '../Select';
import MenuItem from '@mui/material/MenuItem';

const CondicionLaboral = ({ state, setField }) => (
	<div className="table-container">
		<table>
			<tbody>
			<tr>
				<td width="50%" className="table-title">RECIBE SEGURO MEDICO</td>
				<td width="40%">
					<Select name="seguroMedio" value={state.seguroMedio} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">RECIBE 13 SUELDO</td>
				<td width="40%">
					<Select name="sueldoTrece" value={state.sueldoTrece} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">RECIBE 14 SUELDO</td>
				<td width="40%">
					<Select name="sueldoCatorce" value={state.sueldoCatorce} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">Rango de sueldo</td>
				<td width="40%">
					<Select name="sueldo" value={state.sueldo} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="$386 - $400">$386 - $400</MenuItem>
						<MenuItem value="$401 - $600">$401 - $600</MenuItem>
						<MenuItem value="$601 - $800">$601 - $800</MenuItem>
						<MenuItem value="$801 - $1.200">$801 - $1.200</MenuItem>
						<MenuItem value="$1.200 - $2.000">$1.200 - $2.000</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">HA TENIDO USTED ALGUN CAMBIO DE PUESTO O ASCENSO EN SU EMPRESA</td>
				<td width="40%">
					<Select name="cambioPuesto" value={state.cambioPuesto} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">ESTA SATISFECHO CON EL EMPLEO ACTUAL</td>
				<td width="40%">
					<Select name="satisfechoEmpleo" value={state.satisfechoEmpleo} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">SE SIENTE AGOTADO, DEBIDO A LA CARGA DE TRABAJO</td>
				<td width="40%">
					<Select name="agotadoEmpleo" value={state.agotadoEmpleo} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">SUS COMPAÑEROS RESPETAN SU TRABAJO Y SUS CAPACIDADES</td>
				<td width="40%">
					<Select name="respetanTrabajo" value={state.respetanTrabajo} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">SUS JEFES RECONOCEN LA CALIDAD DE SU TRABAJO</td>
				<td width="40%">
					<Select name="jefesRecoTrab" value={state.jefesRecoTrab} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">EN SU TRABAJO EXISTEN RIESGOS LABORALES</td>
				<td width="40%">
					<Select name="riesgoLaboral" value={state.riesgoLaboral} onChange={setField}>
						<MenuItem value="">-</MenuItem>
						<MenuItem value="SI">SI</MenuItem>
						<MenuItem value="NO">NO</MenuItem>
					</Select>
				</td>
			</tr>
			<tr>
				<td width="50%" className="table-title">DESEARIA CAMBIAR DE TRABAJO</td>
				<td width="40%">
					<Select name="deseariaCambiarTrabajo" value={state.deseariaCambiarTrabajo} onChange={setField}>
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

export default CondicionLaboral;
