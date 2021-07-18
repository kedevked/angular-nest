import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Todo } from '../todo/todo.component';

@Component({
  selector: 'youtube-poly-vs-mono-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  constructor(private appService: AppService) {}

  todos: Todo[] =  [
    {id: '1', name: 'name1'},
    {id: '2', name: 'name2'}
  ]

  addTodo(name: string) {
    this.appService.postTodo({name}).subscribe();
  }

  ngOnInit() {
    this.appService.getTodoList().subscribe(data => {
      this.todos = data;
    });
  }
}
