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
import { EmployeeAttendanceService } from './employee_attendance.service';
import { CreateEmployeeAttendanceDto } from './dto/create-employee_attendance.dto';
import { UpdateEmployeeAttendanceDto } from './dto/update-employee_attendance.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('EmployeeAttendance')
@Controller('employeeAttendance')
export class EmployeeAttendanceController {
  constructor(private readonly employeeAttendanceService: EmployeeAttendanceService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create employeeAttendance' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmployeeAttendanceDto: CreateEmployeeAttendanceDto) {
    return this.employeeAttendanceService.create(createEmployeeAttendanceDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all employeeAttendance' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.employeeAttendanceService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one employeeAttendance' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeAttendanceService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update employeeAttendance by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeAttendanceDto: UpdateEmployeeAttendanceDto) {
    return this.employeeAttendanceService.update(id, updateEmployeeAttendanceDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete employeeAttendance by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeAttendanceService.remove(id);
  }
}
