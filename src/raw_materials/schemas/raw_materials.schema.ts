import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type RawMaterialsDocument = HydratedDocument<RawMaterials>;

@Schema({ timestamps: true })
export class RawMaterials {
  @Prop()
	name:string;

	@Prop()
	color:string;

	@Prop()
	type_of_cloth:string;

	@Prop()
	worth:number;

	@Prop()
	currency:string;

	;
}

export const RawMaterialsSchema = SchemaFactory.createForClass(RawMaterials);
