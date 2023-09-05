import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { EmployersService } from '../employers/employers.service';
import { CreateEmployersDto } from 'src/employers/dto/create-employers.dto';
import { CreateEmployeesDto } from 'src/employees/dto/create-employees.dto';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly employersService: EmployersService,
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService,
  ) {}

  async login(createEmployersDto: CreateEmployersDto, res: Response) {
    const { full_name, password } = createEmployersDto;
    const employers = await this.employersService.findOneLogin(full_name);
    if (!employers) {
      throw new HttpException(
        { msg: `No Such Admin!` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, employers.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Password Wrong!`,
      });
    }
    const tokens = await this.getToken(employers.id, 'EMPLOYERS');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.employersService.update(employers.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Success!',
      employers: updatedUser,
      tokens,
    };
    return response;
  }

  async login_(createEmployeesDto: CreateEmployeesDto, res: Response) {
    const { full_name, password } = createEmployeesDto;
    const employees = await this.employeesService.findOneLogin(full_name);
    if (!employees) {
      throw new HttpException({ msg: `No Such User!` }, HttpStatus.BAD_REQUEST);
    }
    const isMatchPass = await bcrypt.compare(password, employees.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Login or Password Wrong!`,
      });
    }
    const tokens = await this.getToken(employees.id, 'EMPLOYEES');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.employeesService.update(employees.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Success!',
      employees: updatedUser,
      tokens,
    };
    return response;
  }

  private async getToken(id: string, role: string) {
    const payload = { id, role };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
