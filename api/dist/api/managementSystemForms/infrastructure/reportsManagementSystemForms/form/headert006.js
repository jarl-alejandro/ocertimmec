"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../../../config"));
function headert006(number) {
    return `
		<table class="Header">
				<tr>
					<td rowspan="6" style="text-align: center;">
						<img src="${config_1.default.API}/logo/occertimm" width="150" height="125"  />
					</td>
					<td rowspan="3" width="48%" style="text-align: center;font-weight:600;">
					MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM
					</td>
					<td style="font-size: 12px">Código:</td>
					<td style="font-size: 12px">OCCERTIMM-T006</td>
				</tr>
				<tr>
					<td style="font-size: 12px">Fecha de emisión:</td>
					<td style="font-size: 12px">01/06/2018</td>
				</tr>
				<tr>
					<td style="font-size: 12px">Fecha de revisión:</td>
					<td style="font-size: 12px">10/06/2018</td>
				</tr>
				<tr>
					<td rowspan="3" style="text-align: center;font-weight:500;font-size:14px">
						ACUERDO DE CONFIDENCIALIDAD Y RESPONSABILIDAD DE LA INFORMACIÓN
					</td>
					<td style="font-size: 12px">Versión:</td>
					<td style="font-size: 12px">DCR-V02-2018</td>
				</tr>
				<tr>
					<td style="font-size: 12px">N° pág:</td>
					<td style="font-size: 12px">Page ${number} of 3</td>
				</tr>
				<tr>
					<td style="font-size: 12px">File:</td>
					<td style="font-size: 12px">T006</td>
				</tr>
			</table>
	`;
}
exports.default = headert006;
