import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosInterceptorService {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
 

    
    let request = req;
    const token: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Rpbm9AbWFpbC5jb20iLCJpZCI6IjYzZDFkNTQzNDM0NmQ5MGQ5ZDE0Mjk4MiIsImlhdCI6MTY3NDkyMzYyNywiZXhwIjoxNjc1MDEwMDI3fQ.D-uWuybgbXHLwrtlKwGu28vsBgQNIhkcEbkwkvinDcw';
    request = req.clone({
      headers: req.headers.set('Authorization', `${token}`),
    });
    return next.handle(request);
  }

}
