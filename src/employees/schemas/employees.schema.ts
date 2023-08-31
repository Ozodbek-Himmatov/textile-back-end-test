import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeesDocument = HydratedDocument<Employees>;

@Schema({ timestamps: true })
export class Employees {
  @Prop()
	full_name:string;

	@Prop()
	image:string;

	@Prop()
	is_active:boolean;

	@Prop()
	phone:string;

	@Prop()
	email:string;

	@Prop()
	login:string;

	@Prop()
	password:string;

	@Prop()
	token:string;

	;
}

export const EmployeesSchema = SchemaFactory.createForClass(Employees);
