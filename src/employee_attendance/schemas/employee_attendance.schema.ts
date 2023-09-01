import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeeAttendanceDocument = HydratedDocument<EmployeeAttendance>;

@Schema({ timestamps: true })
export class EmployeeAttendance {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	employee_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	entrance_time_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	exit_time_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	date:Date;

	;
}

export const EmployeeAttendanceSchema = SchemaFactory.createForClass(EmployeeAttendance);
