import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenReq} from '../../../utils/token-req';
import {DataResponse} from '../../../utils/data-response';

const header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}oauth/`;
  constructor(
    private cookie: CookieService,
    private http: HttpClient,
  ) {
    this.baseUrl = environment.apiUrl;
  }

  getToken() {
    return this.cookie.get('token');
  }

  public google(token: TokenReq): Observable<DataResponse> {
    // @ts-ignore
    return this.http.post<any>(`${this.baseUrl}google`, token, header);
  }

  public facebook(token: TokenReq): Observable<DataResponse> {
    // @ts-ignore
    return this.http.post<TokenDto>(`${this.baseUrl}facebook`, token, header);
  }
}
