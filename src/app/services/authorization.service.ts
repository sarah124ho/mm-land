import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../api/authentication.service';

import { AuthorizationDTO, InitialAuthorization } from '../domain/authorization.dto';
import { BaseResponseDTO } from '../domain/base-response.dto';

export const AuthorizationKey: string = 'AUTHORIZATION';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements OnDestroy {

  constructor(private service: AuthenticationService) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public isAuthenticated(): boolean {
    const data: string | null = localStorage.getItem(AuthorizationKey);

    if (!data) {
      localStorage.setItem(AuthorizationKey, JSON.stringify(InitialAuthorization));
      return false;
    }

    const auth: AuthorizationDTO = JSON.parse(data) as AuthorizationDTO;

    const currentDate = new Date();
    const expire = Date.parse(auth.expire);

    if (!auth.token.length || expire <= currentDate.getTime()) {

      return false;
    }

    return true;
  }

  public setToken(data: AuthorizationDTO): void {
    localStorage.setItem(AuthorizationKey, JSON.stringify(data));
  }

  public getToken(): string | undefined {
    const data: string | null = localStorage.getItem(AuthorizationKey);

    if (!data) {
      return undefined;
    }

    const auth: AuthorizationDTO = JSON.parse(data) as AuthorizationDTO;

    const currentDate = new Date();
    const expire = Date.parse(auth.expire);

    if (!auth.token.length || expire <= currentDate.getTime()) {
      return undefined;
    }

    return auth.token;
  }

  public refreshToken(): Observable<BaseResponseDTO<AuthorizationDTO>> | undefined {
    const data: string | null = localStorage.getItem(AuthorizationKey);

    if (!data) {
      return undefined;
    }

    const auth: AuthorizationDTO = JSON.parse(data) as AuthorizationDTO;

    const currentDate = new Date();
    const expire = Date.parse(auth.expire);

    if (auth.token.length && auth.refresh.length && expire <= currentDate.getTime()) {
      return this.service.RefreshToken(auth.refresh)
    }

    return undefined
  }
}
