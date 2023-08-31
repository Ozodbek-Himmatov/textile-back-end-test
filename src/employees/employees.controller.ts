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
import { EmployeesService } from './employees.service';
import { CreateEmployeesDto } from './dto/create-employees.dto';
import { UpdateEmployeesDto } from './dto/update-employees.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create employees' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmployeesDto: CreateEmployeesDto) {
    return this.employeesService.create(createEmployeesDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all employees' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.employeesService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one employees' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update employees by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeesDto: UpdateEmployeesDto) {
    return this.employeesService.update(id, updateEmployeesDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete employees by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
