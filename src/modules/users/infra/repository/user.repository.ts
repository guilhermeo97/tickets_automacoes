import { User } from '../../domain/user';
import { UserEntity } from '../entities/user.entity';

export class UserRepository {
  constructor() {}

  async create(user: UserEntity): Promise<User> {}
}
