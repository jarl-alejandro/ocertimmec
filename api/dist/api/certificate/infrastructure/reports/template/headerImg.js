"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../../../config"));
function headerImg() {
    return `
		<style>
			.headerImg {
				margin: 0 auto;
				margin-top: 2rem;
				width: 98%;
			}
			.headerImg .occertimm {
				margin-right: 15%;
			}

			.headerImg .logo {
				position: relative;
				bottom: 3rem;
			}

		</style>
		<div class="headerImg">
			<img class="occertimm" src="${config_1.default.API}/logo/occertimm" width="300" height="250"  />
			<img src="${config_1.default.API}/fotos-pdf/logosetec.png" width="400" height="180"  class="logo" />
		</div>

	`;
}
exports.default = headerImg;
