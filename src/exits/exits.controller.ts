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
import { ExitsService } from './exits.service';
import { CreateExitsDto } from './dto/create-exits.dto';
import { UpdateExitsDto } from './dto/update-exits.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Exits')
@Controller('exits')
export class ExitsController {
  constructor(private readonly exitsService: ExitsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create exits' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createExitsDto: CreateExitsDto) {
    return this.exitsService.create(createExitsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all exits' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.exitsService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one exits' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exitsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update exits by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExitsDto: UpdateExitsDto) {
    return this.exitsService.update(id, updateExitsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete exits by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exitsService.remove(id);
  }
}
