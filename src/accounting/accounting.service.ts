import { Injectable } from '@nestjs/common';
import { CreateAccountingDto } from './dto/create-accounting.dto';
import { UpdateAccountingDto } from './dto/update-accounting.dto';
import { Accounting, AccountingDocument } from './schemas/accounting.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccountingService {
  constructor(
    @InjectModel(Accounting.name)
    private accountingModel: Model<AccountingDocument>,
  ) {}

  async create(createAccountingDto: CreateAccountingDto) {
    const res = await new this.accountingModel(createAccountingDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.accountingModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.accountingModel.findById(id).exec();
  }

  async update(id: string, updateAccountingDto: UpdateAccountingDto) {
    return this.accountingModel
      .findByIdAndUpdate(id, updateAccountingDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.accountingModel.findByIdAndDelete(id).exec();
  }
}
