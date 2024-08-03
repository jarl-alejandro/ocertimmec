import {Document, Schema, model, Types, PopulatedDoc} from 'mongoose'
import {UserDocument} from "../../users/domain/model";

export interface Certificate extends Document {
	_id: Types.ObjectId;
	id_user: PopulatedDoc<UserDocument & Document>;
	name: String;
	photo: String;
	cost: Number;
	requirements: String;
	competition: String;
	competitionUnits: String;
	description: String;
	place: String;
	note: String;
	type: String;
	uc: String,
	sector: String,
	isActive: Boolean;
	squemaCode: String,

	materials: string[],
	equipments: string[],
	tools: string[],
}

const CertificateSchema = new Schema<Certificate>({
	id_user: { type: Types.ObjectId, ref: 'Users' },
	name: { type: String, default: "" },
	photo: String,
	cost: { type: Number, default: 0 },
	requirements: { type: String, default: '' },
	competition: { type: String, default: '' },
	competitionUnits: { type: String, default: '' },
	description: { type: String, default: '' },
	place: { type: String, default: '' },
	note: { type: String, default: '' },
	type: { type: String, default: 'Certificate' },
	uc: String,
	sector: String,
	isActive: { type:Boolean, default: true },
	squemaCode: { type: String },

	materials: [{ type: String }],
	equipments: [{ type: String }],
	tools: [{ type: String }],
})

export default model<Certificate>('Certificate', CertificateSchema, 'Certificate')
