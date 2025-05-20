import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { SprintService } from '../../sprint.service';
import { CreateSprintDto } from '../../application/dto/create-sprint.dto';
import { UpdateSprintDto } from '../../application/dto/update-sprint.dto';
import { Sprint } from '../../domain/sprint';

@Controller('sprints')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @Post()
  create(@Body(new ValidationPipe()) createSprintDto: CreateSprintDto) {
    const sprint = new Sprint(
      createSprintDto.name,
      createSprintDto.startDate,
      createSprintDto.endDate,
    );
    return this.sprintService.create(createSprintDto);
  }

  // @Get()
  // findAll() {
  //   return this.sprintService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sprintService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSprintDto: UpdateSprintDto) {
  //   return this.sprintService.update(+id, updateSprintDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sprintService.remove(+id);
}
