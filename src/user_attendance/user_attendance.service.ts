import { Injectable } from '@nestjs/common';
import { CreateUserAttendanceDto } from './dto/create-user_attendance.dto';
import { UpdateUserAttendanceDto } from './dto/update-user_attendance.dto';
import {
  UserAttendance,
  UserAttendanceDocument,
} from './schemas/user_attendance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserAttendanceService {
  constructor(
    @InjectModel(UserAttendance.name)
    private userAttendanceModel: Model<UserAttendanceDocument>,
  ) {}

  async create(createUserAttendanceDto: CreateUserAttendanceDto) {
    const res = await new this.userAttendanceModel(
      createUserAttendanceDto,
    ).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.userAttendanceModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.userAttendanceModel.findById(id).exec();
  }

  async update(
    id: string,
    updateUserAttendanceDto: UpdateUserAttendanceDto,
  ) {
    return this.userAttendanceModel
      .findByIdAndUpdate(id, updateUserAttendanceDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.userAttendanceModel.findByIdAndDelete(id).exec();
  }
}
