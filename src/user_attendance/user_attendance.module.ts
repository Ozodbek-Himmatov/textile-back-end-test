import { Module } from '@nestjs/common';
import { UserAttendanceService } from './user_attendance.service';
import { UserAttendanceController } from './user_attendance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserAttendance,
  UserAttendanceSchema,
} from './schemas/user_attendance.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserAttendance.name, schema: UserAttendanceSchema },
    ]),
    JwtModule,
  ],
  controllers: [UserAttendanceController],
  providers: [UserAttendanceService],
})
export class UserAttendanceModule {}
