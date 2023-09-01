import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeesProductsDocument = HydratedDocument<EmployeesProducts>;

@Schema({ timestamps: true })
export class EmployeesProducts {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	employee_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }])
	product_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	start_year:string;

	;
}

export const EmployeesProductsSchema = SchemaFactory.createForClass(EmployeesProducts);
