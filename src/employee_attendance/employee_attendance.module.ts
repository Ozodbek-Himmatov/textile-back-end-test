import { Module } from '@nestjs/common';
import { EmployeeAttendanceService } from './employee_attendance.service';
import { EmployeeAttendanceController } from './employee_attendance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeAttendance, EmployeeAttendanceSchema } from './schemas/employee_attendance.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EmployeeAttendance.name, schema: EmployeeAttendanceSchema }]),
    JwtModule,
  ],
  controllers: [EmployeeAttendanceController],
  providers: [EmployeeAttendanceService],
})
export class EmployeeAttendanceModule {}
