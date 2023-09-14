import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UserService } from '../users/user.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
// import { CreateUserRoleDto   } from 'src/user-role/dto/create-user-role.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(createUserDto: CreateUserDto, res: Response) {
    const { full_name, password } = createUserDto;
    const user = await this.userService.findOneLogin(full_name);
    if (!user) {
      throw new HttpException(
        { msg: `No Such Admin!` },
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(user);
    const isMatchPass = await bcrypt.compare(password, user.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Password Wrong!`,
      });
    }
    const tokens = await this.getToken(user.id, 'USER');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userService.update(user.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Success!',
      user: updatedUser,
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
