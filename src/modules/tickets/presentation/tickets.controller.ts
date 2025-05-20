import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTicketDto } from '../application/dto/create-ticket.dto';
import { UpdateTicketDto } from '../application/dto/update-ticket.dto';

@Controller('tasks')
export class TicketController {
  @Post()
  create(@Body() createTaskDto: CreateTicketDto) {
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
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTicketDto) {
    // this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // this.tasksService.remove(+id);
  }
}
