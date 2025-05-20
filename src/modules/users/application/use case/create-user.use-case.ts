import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/user';
import { UserRepository } from '../../infra/repository/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    //private readonly passwordService: PasswordService,
    //private readonly jwtService: JwtService,
  ) {}

  async execute(createUserDto: CreateUserDto) {}
}
