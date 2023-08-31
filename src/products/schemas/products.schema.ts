import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema({ timestamps: true })
export class Products {
  @Prop()
	name:string;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'RawMaterials'  }])
	raw_materials_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	worth:number;

	@Prop()
	currency:string;

	;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
