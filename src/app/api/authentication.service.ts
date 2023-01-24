import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthenticationInputDTO, OtpVerifyInputDTO } from '../domain/authentication.dto';
import { AuthorizationDTO } from '../domain/authorization.dto';
import { BaseResponseDTO } from '../domain/base-response.dto';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    public SignIn(input: AuthenticationInputDTO): Observable<BaseResponseDTO<string>> {
        return this.http.post<BaseResponseDTO<string>>(
            `${environment.API_BASE_URL}/account/sign_in`,
            JSON.stringify(input)
        );
    }

    public SignUp(input: AuthenticationInputDTO): Observable<BaseResponseDTO<string>> {
        return this.http.post<BaseResponseDTO<string>>(
            `${environment.API_BASE_URL}/account/sign_up`,
            JSON.stringify(input)
        );
    }

    public OtpVerify(input: OtpVerifyInputDTO): Observable<BaseResponseDTO<AuthorizationDTO>> {
        return this.http.post<BaseResponseDTO<AuthorizationDTO>>(
            `${environment.API_BASE_URL}/account/verify/otp`,
            JSON.stringify(input)
        );
    }

    public RefreshToken(input: string): Observable<BaseResponseDTO<AuthorizationDTO>> {
        return this.http.post<BaseResponseDTO<AuthorizationDTO>>(
            `${environment.API_BASE_URL}/account/refresh`,
            JSON.stringify({token: input})
        );
    }

}
