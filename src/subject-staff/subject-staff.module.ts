import { Module } from '@nestjs/common';
import { SubjectStaffService } from './subject-staff.service';
import { SubjectStaffController } from './subject-staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectStaff, SubjectStaffSchema } from './schemas/subject-staff.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SubjectStaff.name, schema: SubjectStaffSchema }]),
    JwtModule,
  ],
  controllers: [SubjectStaffController],
  providers: [SubjectStaffService],
})
export class SubjectStaffModule {}
