import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTaskDto } from '../application/dto/create-task.dto';
import { UpdateTaskDto } from '../application/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    //return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    //return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    // this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // this.tasksService.remove(+id);
  }
}
