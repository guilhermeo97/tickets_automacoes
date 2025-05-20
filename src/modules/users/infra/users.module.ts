import { Module } from '@nestjs/common';
import { UserController } from '../presentation/controllers/users.controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
