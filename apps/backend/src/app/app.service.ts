import { Injectable } from '@nestjs/common';
import type { Message } from '@youtube-poly-vs-mono/types';

@Injectable()
export class AppService {
  getData(): Message  {
    return { message: 'Welcome to backend!' };
  }
}
