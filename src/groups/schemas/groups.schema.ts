import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type GroupsDocument = HydratedDocument<Groups>;

@Schema({ timestamps: true })
export class Groups {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	employee_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	product_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	start_year:string;

	;
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);
