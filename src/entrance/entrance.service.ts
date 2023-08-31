import { Injectable } from '@nestjs/common';
import { CreateEntranceDto } from './dto/create-entrance.dto';
import { UpdateEntranceDto } from './dto/update-entrance.dto';
import { Entrance, EntranceDocument } from './schemas/entrance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EntranceService {
  constructor(
    @InjectModel(Entrance.name)
    private entranceModel: Model<EntranceDocument>,
  ) {}

  async create(createEntranceDto: CreateEntranceDto) {
    const res = await new this.entranceModel(createEntranceDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.entranceModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.entranceModel.findById(id).exec();
  }

  async update(id: string, updateEntranceDto: UpdateEntranceDto) {
    return this.entranceModel
      .findByIdAndUpdate(id, updateEntranceDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.entranceModel.findByIdAndDelete(id).exec();
  }
}
