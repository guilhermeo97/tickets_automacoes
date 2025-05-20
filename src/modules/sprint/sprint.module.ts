import { Module } from '@nestjs/common';
import { SprintService } from './sprint.service';
import { SprintController } from './presentation/controller/sprint.controller';
import { CreateSprintUseCase } from './application/use-case/create-sprint.use-case';

@Module({
  controllers: [SprintController],
  providers: [SprintService, CreateSprintUseCase],
})
export class SprintModule {}
