import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RawMaterialsService } from './raw_materials.service';
import { CreateRawMaterialsDto } from './dto/create-raw_materials.dto';
import { UpdateRawMaterialsDto } from './dto/update-raw_materials.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('RawMaterials')
@Controller('rawMaterials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create rawMaterials' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRawMaterialsDto: CreateRawMaterialsDto) {
    return this.rawMaterialsService.create(createRawMaterialsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all rawMaterials' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.rawMaterialsService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one rawMaterials' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rawMaterialsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update rawMaterials by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRawMaterialsDto: UpdateRawMaterialsDto) {
    return this.rawMaterialsService.update(id, updateRawMaterialsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete rawMaterials by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rawMaterialsService.remove(id);
  }
}
