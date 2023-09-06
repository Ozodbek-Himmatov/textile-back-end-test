import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AccountingDocument = HydratedDocument<Accounting>;

@Schema({ timestamps: true })
export class Accounting {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }])
  product_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  quantity: number;
}

export const AccountingSchema = SchemaFactory.createForClass(Accounting);
