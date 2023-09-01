import { Injectable } from '@nestjs/common';
import { CreateEmployeesProductsDto } from './dto/create-employees_products.dto';
import { UpdateEmployeesProductsDto } from './dto/update-employees_products.dto';
import { EmployeesProducts, EmployeesProductsDocument } from './schemas/employees_products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeesProductsService {
  constructor(
    @InjectModel(EmployeesProducts.name)
    private employeesProductsModel: Model<EmployeesProductsDocument>,
  ) {}

  async create(createEmployeesProductsDto: CreateEmployeesProductsDto) {
    const res = await new this.employeesProductsModel(createEmployeesProductsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.employeesProductsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.employeesProductsModel.findById(id).exec();
  }

  async update(id: string, updateEmployeesProductsDto: UpdateEmployeesProductsDto) {
    return this.employeesProductsModel
      .findByIdAndUpdate(id, updateEmployeesProductsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.employeesProductsModel.findByIdAndDelete(id).exec();
  }
}
