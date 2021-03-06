import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private cookie: CookieService,
  ) {
  }

  getToken() {
    return this.cookie.get(TOKEN_KEY);
  }

  setToken(token: string) {
    this.cookie.delete(TOKEN_KEY);
    this.cookie.set(TOKEN_KEY, token);
  }

  removeToken() {
    this.cookie.delete(TOKEN_KEY);
  }

}
