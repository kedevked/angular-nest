import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import { extname } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {

    // tslint:disable-next-line: ban-types
    use(req: Request, res: Response, next: NextFunction): void {
        const { baseUrl } = req;
        console.log('beginning')

        console.log('baseurl', baseUrl)
        if (baseUrl.includes('api')) {
            return next();
        }

        const accept = req.accepts('html', 'json', 'xml');
        console.log('acceptreq', accept)
        if (accept !== 'html') {
            return next();
        }

        const ext = extname(req.originalUrl);
        if (ext !== '') {
            return next();
        }

        console.log('nothing to do')
        // res.sendFile(join(__dirname, '../../browser', 'index.html'));
        res.sendFile(path.resolve('dist/frontend/browser/index.html'));
    }
}