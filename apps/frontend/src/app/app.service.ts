import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Message } from '@youtube-poly-vs-mono/types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Message>('/api/data');
  }

}
