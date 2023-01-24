import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(public service: AuthorizationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.service.getToken();
      if (token) {
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${this.service.getToken()}`
              }
          });
          return next.handle(request);
      }

      return next.handle(request);
  }
}
