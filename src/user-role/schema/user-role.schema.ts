import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserAttendanceDocument = HydratedDocument<UserRole>;

@Schema({ timestamps: true })
export class UserRole {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }])
  user_id: mongoose.Schema.Types.ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Roles' }])
  role_id: mongoose.Schema.Types.ObjectId;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
