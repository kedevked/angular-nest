import { Component, Input } from '@angular/core';

export interface Todo {
  id: string,
  name: string
}

@Component({
  selector: 'youtube-poly-vs-mono-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input()todo: Todo;

}
