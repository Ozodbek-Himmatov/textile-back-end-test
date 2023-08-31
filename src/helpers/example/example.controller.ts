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
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Example')
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create example' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createExampleDto: CreateExampleDto) {
    return this.exampleService.create(createExampleDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all example' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.exampleService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one example' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exampleService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update example by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExampleDto: UpdateExampleDto) {
    return this.exampleService.update(id, updateExampleDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete example by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleService.remove(id);
  }
}
