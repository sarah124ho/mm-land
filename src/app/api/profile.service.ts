import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BaseResponseDTO } from '../domain/base-response.dto';
import { ProfileDTO } from '../domain/profile.dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<BaseResponseDTO<ProfileDTO>> {
    return this.http.get<BaseResponseDTO<ProfileDTO>>(
      `${environment.API_BASE_URL}/profile`
    );
  }
}