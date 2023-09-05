import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role, RoleDocument } from './schemas/role.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<RoleDocument>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const res = await new this.roleModel(createRoleDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.roleModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.roleModel.findById(id).exec();
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleModel
      .findByIdAndUpdate(id, updateRoleDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.roleModel.findByIdAndDelete(id).exec();
  }
}
