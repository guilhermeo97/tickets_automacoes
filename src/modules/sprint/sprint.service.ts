import { Injectable } from '@nestjs/common';
import { CreateSprintDto } from './application/dto/create-sprint.dto';
import { UpdateSprintDto } from './application/dto/update-sprint.dto';

@Injectable()
export class SprintService {
  create(createSprintDto: CreateSprintDto) {
    return 'This action adds a new sprint';
  }

  findAll() {
    return `This action returns all sprint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sprint`;
  }

  update(id: number, updateSprintDto: UpdateSprintDto) {
    return `This action updates a #${id} sprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} sprint`;
  }
}
