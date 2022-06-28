import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>('./api/todos');
  }
  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`api/todos/${todo.id}`);
  }
  postTodo(todo: Partial<Todo>): Observable<any>  {
    return this.http.post('./api/todos', todo);
  }
  updateTodo(arg0: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getTodo(todoId: string):Observable<Todo> {
    return this.http.get<Todo>(`./api/todos/${todoId}`);
  }

  constructor(private http: HttpClient) { }

}
