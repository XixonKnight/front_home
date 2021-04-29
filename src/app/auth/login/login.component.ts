import {Component, OnInit} from '@angular/core';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import {Router} from '@angular/router';
import {TokenService} from '../../@core/services/_service/auth/token.service';
import {AuthService} from '../../@core/services/_service/auth/auth.service';
import { FormProviderRequest } from '../../@core/utils/form-provider-req';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;

  constructor(
    private authService: SocialAuthService,
    private service: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.disables();
  }

  disables() {
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      this.socialUser = data;
      console.log(data);
      const form = new FormProviderRequest();
      form.token = this.socialUser.idToken;
      this.service.google(form).subscribe(
        res => {
          this.tokenService.setToken(res.data.jwt);
          this.isLogged = true;
        },
      );
    }).catch(
      err => {
        // tslint:disable-next-line:no-console
        console.log(err);
      },
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      this.socialUser = res;
      console.log(res);
      // const tokenFacebook = new TokenDto(this.socialUser.authToken);
      // this.oauthService.facebook(tokenFacebook).subscribe(
      //   data=>{
      //     this.tokenService.setToken(data.data.value);
      //     console.log(data);
      //     this.isLogged = true;
      //   }
      // )
    }).catch(
      err => {
        console.log(err);
      },
    );
  }
}
