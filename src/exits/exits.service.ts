import { Injectable } from '@nestjs/common';
import { CreateExitsDto } from './dto/create-exits.dto';
import { UpdateExitsDto } from './dto/update-exits.dto';
import { Exits, ExitsDocument } from './schemas/exits.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ExitsService {
  constructor(
    @InjectModel(Exits.name)
    private exitsModel: Model<ExitsDocument>,
  ) {}

  async create(createExitsDto: CreateExitsDto) {
    const res = await new this.exitsModel(createExitsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.exitsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.exitsModel.findById(id).exec();
  }

  async update(id: string, updateExitsDto: UpdateExitsDto) {
    return this.exitsModel
      .findByIdAndUpdate(id, updateExitsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.exitsModel.findByIdAndDelete(id).exec();
  }
}
