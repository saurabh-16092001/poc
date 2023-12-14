import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from '../model/AuthenticationRequest';
import { ServiceResponse } from '../model/serviceResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }

  login(request:AuthenticationRequest){
    return this.http.post<ServiceResponse>("/user/authentication",request);
  }
  register(request:AuthenticationRequest){
    return this.http.post<ServiceResponse>("/user/register",request);
  }
}
