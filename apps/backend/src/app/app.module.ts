import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule } from '@nestjs/ng-universal';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppServerModule } from '../../../frontend/server';
import { FrontendMiddleware } from './middlewares/frontend.middleware';
import { ApiController } from './api/api.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/frontend/browser')
    })
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FrontendMiddleware).forRoutes({
      path: '/**',
      method: RequestMethod.ALL,
    });
  }
}
