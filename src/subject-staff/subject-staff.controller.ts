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
import { SubjectStaffService } from './subject-staff.service';
import { CreateSubjectStaffDto } from './dto/create-subject-staff.dto';
import { UpdateSubjectStaffDto } from './dto/update-subject-staff.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('SubjectStaff')
@Controller('subjectStaff')
export class SubjectStaffController {
  constructor(private readonly subjectStaffService: SubjectStaffService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create subjectStaff' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSubjectStaffDto: CreateSubjectStaffDto) {
    return this.subjectStaffService.create(createSubjectStaffDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all subjectStaff' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.subjectStaffService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one subjectStaff' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectStaffService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update subjectStaff by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSubjectStaffDto: UpdateSubjectStaffDto) {
    return this.subjectStaffService.update(id, updateSubjectStaffDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete subjectStaff by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectStaffService.remove(id);
  }
}
