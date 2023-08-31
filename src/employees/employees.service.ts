import { Injectable } from '@nestjs/common';
import { CreateEmployeesDto } from './dto/create-employees.dto';
import { UpdateEmployeesDto } from './dto/update-employees.dto';
import { Employees, EmployeesDocument } from './schemas/employees.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employees.name)
    private employeesModel: Model<EmployeesDocument>,
  ) {}

  async create(createEmployeesDto: CreateEmployeesDto) {
    const res = await new this.employeesModel(createEmployeesDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.employeesModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.employeesModel.findById(id).exec();
  }

  async update(id: string, updateEmployeesDto: UpdateEmployeesDto) {
    return this.employeesModel
      .findByIdAndUpdate(id, updateEmployeesDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.employeesModel.findByIdAndDelete(id).exec();
  }
}
