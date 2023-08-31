import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EntranceDocument = HydratedDocument<Entrance>;

@Schema({ timestamps: true })
export class Entrance {
  @Prop()
	entrance_time:timestamp;

	;
}

export const EntranceSchema = SchemaFactory.createForClass(Entrance);
