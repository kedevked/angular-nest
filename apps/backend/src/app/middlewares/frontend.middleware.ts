import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import { extname } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {

    // tslint:disable-next-line: ban-types
    use(req: Request, res: Response, next: NextFunction): void {
        const { baseUrl } = req;

        if (baseUrl.includes('api')) {
            return next();
        }

        const accept = req.accepts('html', 'json', 'xml');
        if (accept !== 'html') {
            return next();
        }

        const ext = extname(req.originalUrl);
        if (ext !== '') {
            return next();
        }

        // res.sendFile(join(__dirname, '../../browser', 'index.html'));
        res.sendFile(path.resolve('dist/frontend/browser/index.html'));
    }
}