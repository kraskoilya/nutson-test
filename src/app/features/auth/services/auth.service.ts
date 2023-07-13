import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/login-dto';
import { LoginPayLoad } from '../models/login-payload';

@Injectable()
export class AuthService {
  private readonly url = '/v3/auth/session';

  constructor(private readonly _http: HttpClient) {}

  public login(payload: LoginPayLoad): Observable<LoginDto> {
    return this._http.post<LoginDto>(this.url, { ...payload });
  }
}
