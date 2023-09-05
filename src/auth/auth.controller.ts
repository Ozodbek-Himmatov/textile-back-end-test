import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateEmployersDto } from 'src/users/dto/create-user.dto';
import { CreateEmployeesDto } from 'src/employees/dto/create-employees.dto';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login Employer' })
  @HttpCode(200)
  @Post('employers/login')
  login(
    @Body() createEmployersDto: CreateEmployersDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(createEmployersDto, res);
  }

  @ApiOperation({ summary: 'Login Employee' })
  @HttpCode(200)
  @Post('employees/login')
  login_(
    @Body() createEmployeesDto: CreateEmployeesDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login_(createEmployeesDto, res);
  }
}
