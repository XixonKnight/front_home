import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private cookie: CookieService,
    private router: Router,
  ) {
  }

  getToken() {
    return this.cookie.get(TOKEN_KEY);
  }

  setToken(token: string) {
    this.cookie.delete(TOKEN_KEY);
    this.cookie.set(TOKEN_KEY, token);
  }

  logOut() {
    sessionStorage.clear();
    this.cookie.deleteAll();
    this.router.navigate(['/auth'], {
      queryParams: {},
    });
  }
}
