import React, { useCallback } from 'react';
import Select from '../Select';
import MenuItem from '@mui/material/MenuItem';

const Ciudadanos = ({ state, setField }) => {
	const handleChange = useCallback((event) => {
		setField(event);
	}, [setField]);

	return (
		<div className="table-container">
			<table>
				<tbody>
				<tr>
					<td width="55%" className="table-title">
						TIPO DE OCUPACION (Empleado/obrero del Gobierno/estado - Empleado empresa publica):
					</td>
					<td width="40%">
						<Select name="tipoOcupacion" value={state.tipoOcupacion} onChange={handleChange}>
							<MenuItem value="">-</MenuItem>
							<MenuItem value="EMPLEADO PÚBLICO">EMPLEADO PÚBLICO</MenuItem>
							<MenuItem value="EMPLEADO PRIVADO">EMPLEADO PRIVADO</MenuItem>
						</Select>
					</td>
				</tr>

				<tr>
					<td width="55%" className="table-title">
						EN LA OCUPACION SELECCIONADA SE ENCUENTRA (CONTRATO O NOMBRAMIENTO):
					</td>
					<td width="40%">
						<Select name="contrato" value={state.contrato || ''} onChange={handleChange}>
							<MenuItem value="">-</MenuItem>
							<MenuItem value="CONTRATO INDEFINIDIO">CONTRATO INDEFINIDIO</MenuItem>
							<MenuItem value="CONTRATO PROVICIONAL">CONTRATO PROVICIONAL</MenuItem>
							<MenuItem value="NOMBRAMIENTO">NOMBRAMIENTO</MenuItem>
							<MenuItem value="PRESTACIÓN DE SERVICIOS PROFESIONALES">
								PRESTACIÓN DE SERVICIOS PROFESIONALES.
							</MenuItem>
						</Select>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Ciudadanos;
