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
import { UserAttendanceService } from './user_attendance.service';
import { CreateUserAttendanceDto } from './dto/create-user_attendance.dto';
import { UpdateUserAttendanceDto } from './dto/update-user_attendance.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('UserAttendance')
@Controller('userAttendance')
export class UserAttendanceController {
  constructor(
    private readonly userAttendanceService: UserAttendanceService,
  ) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create userAttendance' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserAttendanceDto: CreateUserAttendanceDto) {
    return this.userAttendanceService.create(createUserAttendanceDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all userAttendance' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.userAttendanceService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one userAttendance' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAttendanceService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update userAttendance by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserAttendanceDto: UpdateUserAttendanceDto,
  ) {
    return this.userAttendanceService.update(
      id,
      updateUserAttendanceDto,
    );
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete userAttendance by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAttendanceService.remove(id);
  }
}
