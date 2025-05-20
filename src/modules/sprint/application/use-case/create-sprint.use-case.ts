import { Injectable } from '@nestjs/common';
import { Sprint } from '../../domain/sprint';

@Injectable()
export class CreateSprintUseCase {
  constructor() {
    // Constructor logic here
  }

  async execute(sprint: Sprint): Promise<Sprint> {
    return sprint;
  }
}
