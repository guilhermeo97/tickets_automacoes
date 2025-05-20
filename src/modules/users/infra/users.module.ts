import { Module } from '@nestjs/common';
import { UserController } from '../presentation/controllers/users.controller';
import { UserRepository } from './repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
