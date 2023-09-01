import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ExitsDocument = HydratedDocument<Exits>;

@Schema({ timestamps: true})
export class Exits {
  @Prop()
	exits_time: Date;
}

export const ExitsSchema = SchemaFactory.createForClass(Exits);
