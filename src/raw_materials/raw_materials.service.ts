import { Injectable } from '@nestjs/common';
import { CreateRawMaterialsDto } from './dto/create-raw_materials.dto';
import { UpdateRawMaterialsDto } from './dto/update-raw_materials.dto';
import { RawMaterials, RawMaterialsDocument } from './schemas/raw_materials.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RawMaterialsService {
  constructor(
    @InjectModel(RawMaterials.name)
    private rawMaterialsModel: Model<RawMaterialsDocument>,
  ) {}

  async create(createRawMaterialsDto: CreateRawMaterialsDto) {
    const res = await new this.rawMaterialsModel(createRawMaterialsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.rawMaterialsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.rawMaterialsModel.findById(id).exec();
  }

  async update(id: string, updateRawMaterialsDto: UpdateRawMaterialsDto) {
    return this.rawMaterialsModel
      .findByIdAndUpdate(id, updateRawMaterialsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.rawMaterialsModel.findByIdAndDelete(id).exec();
  }
}
