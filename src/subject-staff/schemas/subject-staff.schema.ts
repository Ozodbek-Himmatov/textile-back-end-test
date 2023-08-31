import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SubjectStaffDocument = HydratedDocument<SubjectStaff>;

@Schema({ timestamps: true })
export class SubjectStaff {
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

export const SubjectStaffSchema = SchemaFactory.createForClass(SubjectStaff);
