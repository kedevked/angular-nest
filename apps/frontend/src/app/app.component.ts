import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'youtube-poly-vs-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  data;

  constructor(private appService: AppService) { }

  init() {
    this.appService.getData().subscribe({next: data => this.data = data});
  }
}
