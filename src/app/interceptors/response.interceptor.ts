import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import ResponseDTO from '../domain/base-response.dto';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        const response = this.parseBody(event.body);
        if (response.errors) {
          throw new Error(response.errors[0]);
        }
        event = event.clone({ body: this.parseBody(event.body) });
      }
      return event;
    }));
  }

  private parseBody(body: any): ResponseDTO {
    const json = JSON.parse(JSON.stringify(body));
    return json as ResponseDTO;
  }
}
