import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployersDocument = HydratedDocument<Employers>;

@Schema({ timestamps: true })
export class Employers {
  @Prop()
	first_name:string;

	@Prop()
	login:string;

	@Prop()
	password:string;

	@Prop()
	token:string;

	@Prop()
	is_active:boolean;

	@Prop()
	is_owner:boolean;

	;
}

export const EmployersSchema = SchemaFactory.createForClass(Employers);
