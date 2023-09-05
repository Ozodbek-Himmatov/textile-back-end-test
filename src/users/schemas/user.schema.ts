import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
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
