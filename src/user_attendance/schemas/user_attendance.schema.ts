import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserAttendanceDocument = HydratedDocument<UserAttendance>;

@Schema({ timestamps: true })
export class UserAttendance {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }])
	user_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }])
	entrance_time_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }])
	exit_time_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	date:Date;
}

export const UserAttendanceSchema = SchemaFactory.createForClass(UserAttendance);
