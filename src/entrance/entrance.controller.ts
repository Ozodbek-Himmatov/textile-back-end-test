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
import { EntranceService } from './entrance.service';
import { CreateEntranceDto } from './dto/create-entrance.dto';
import { UpdateEntranceDto } from './dto/update-entrance.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Entrance')
@Controller('entrance')
export class EntranceController {
  constructor(private readonly entranceService: EntranceService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create entrance' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEntranceDto: CreateEntranceDto) {
    return this.entranceService.create(createEntranceDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all entrance' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.entranceService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one entrance' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entranceService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update entrance by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEntranceDto: UpdateEntranceDto) {
    return this.entranceService.update(id, updateEntranceDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete entrance by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entranceService.remove(id);
  }
}
