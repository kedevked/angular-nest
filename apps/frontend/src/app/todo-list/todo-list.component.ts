import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Todo } from '../todo/todo.component';

@Component({
  selector: 'youtube-poly-vs-mono-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) { }

  todos: Todo[] = [
    { id: '1', name: 'name1' },
    { id: '2', name: 'name2' }
  ]

  addTodo(name: string) {
    this.appService.postTodo({ name }).subscribe(() => this.getTodoList());
  }

  editTodo(todo: Todo) {
    this.router.navigate([`../todo`, todo.id], { relativeTo: this.activatedRoute })
  }

  deleteTodo(todo: Todo) {
    this.appService.deleteTodo(todo).subscribe(() => this.getTodoList());
  }

  ngOnInit() {
    this.getTodoList();
  }

  private getTodoList() {
    this.appService.getTodoList().subscribe(data => {
      this.todos = data;
    });
  }
}
