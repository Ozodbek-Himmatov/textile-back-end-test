import { Injectable } from '@nestjs/common';
import { CreateEmployersDto } from './dto/create-employers.dto';
import { UpdateEmployersDto } from './dto/update-employers.dto';
import { Employers, EmployersDocument } from './schemas/employers.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployersService {
  constructor(
    @InjectModel(Employers.name)
    private employersModel: Model<EmployersDocument>,
  ) {}

  async create(createEmployersDto: CreateEmployersDto) {
    const res = await new this.employersModel(createEmployersDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.employersModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.employersModel.findById(id).exec();
  }

  async update(id: string, updateEmployersDto: UpdateEmployersDto) {
    return this.employersModel
      .findByIdAndUpdate(id, updateEmployersDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.employersModel.findByIdAndDelete(id).exec();
  }
}
