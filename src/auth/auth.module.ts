import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { EmployersModule } from '../users/employers.module';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  imports: [JwtModule.register({}), EmployersModule, EmployeesModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
