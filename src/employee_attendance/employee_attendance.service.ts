import { Injectable } from '@nestjs/common';
import { CreateEmployeeAttendanceDto } from './dto/create-employee_attendance.dto';
import { UpdateEmployeeAttendanceDto } from './dto/update-employee_attendance.dto';
import { EmployeeAttendance, EmployeeAttendanceDocument } from './schemas/employee_attendance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeAttendanceService {
  constructor(
    @InjectModel(EmployeeAttendance.name)
    private employeeAttendanceModel: Model<EmployeeAttendanceDocument>,
  ) {}

  async create(createEmployeeAttendanceDto: CreateEmployeeAttendanceDto) {
    const res = await new this.employeeAttendanceModel(createEmployeeAttendanceDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.employeeAttendanceModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.employeeAttendanceModel.findById(id).exec();
  }

  async update(id: string, updateEmployeeAttendanceDto: UpdateEmployeeAttendanceDto) {
    return this.employeeAttendanceModel
      .findByIdAndUpdate(id, updateEmployeeAttendanceDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.employeeAttendanceModel.findByIdAndDelete(id).exec();
  }
}
