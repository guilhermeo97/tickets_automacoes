import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/user';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor() {}

  // async create(user: UserEntity): Promise<User> {}
}
