import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(localStorage.getItem('loginToken')==null || localStorage.getItem('loginToken') == ''){
      request = request.clone({
        setHeaders:{
          'Accept':'application/json',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT '
        }
      });
    }
    else{
      request = request.clone({
        setHeaders:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT ',
        'Authorization':`Bearer ${localStorage.getItem('loginToken')}`
        }
      });
    }

    const token=localStorage.getItem('loginToken');
    const cloneRequest = request.clone({
      setHeaders:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Content-Type'
        ,
        Authorization:`Bearer ${token}`
      }
    });
  

    return next.handle(request);
  }
}
