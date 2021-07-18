import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('api/todo')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    await this.todosService.create(createTodoDto);
  }

  @Get('s')
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get('/:id')
  async find(@Param('id') id: string){
    return this.todosService.find(id);
  }
}
