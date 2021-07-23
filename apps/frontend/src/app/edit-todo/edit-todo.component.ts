import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Todo } from '../todo/todo.component';

@Component({
  selector: 'youtube-poly-vs-mono-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.appService.getTodo(id).subscribe(data => {
      this.todo = data
    })
  }

}
