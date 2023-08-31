import { Injectable } from '@nestjs/common';
import { CreateSubjectStaffDto } from './dto/create-subject-staff.dto';
import { UpdateSubjectStaffDto } from './dto/update-subject-staff.dto';
import { SubjectStaff, SubjectStaffDocument } from './schemas/subject-staff.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubjectStaffService {
  constructor(
    @InjectModel(SubjectStaff.name)
    private subjectStaffModel: Model<SubjectStaffDocument>,
  ) {}

  async create(createSubjectStaffDto: CreateSubjectStaffDto) {
    const res = await new this.subjectStaffModel(createSubjectStaffDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.subjectStaffModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.subjectStaffModel.findById(id).exec();
  }

  async update(id: string, updateSubjectStaffDto: UpdateSubjectStaffDto) {
    return this.subjectStaffModel
      .findByIdAndUpdate(id, updateSubjectStaffDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.subjectStaffModel.findByIdAndDelete(id).exec();
  }
}
