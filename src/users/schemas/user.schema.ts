import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Roles'}])
  role_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  full_name: string;

  @Prop()
  image: string;

  @Prop()
  login: string;

  @Prop()
  phone_number: string;

  @Prop()
  email?: string;

  @Prop()
  password: string;

  @Prop()
  token: string;

  @Prop()
  is_active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
