import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule, NbCardModule,
  NbCheckboxModule, NbIconModule,
  NbInputModule, NbSpinnerModule,
} from '@nebular/theme';
import {NgxAuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NgxAuthRoutingModule,

        NbAuthModule,
        NbIconModule,
        ReactiveFormsModule,
        NbCardModule,
        NbSpinnerModule,
        NgxSpinnerModule,
        TranslateModule,
    ],
  declarations: [
  LoginComponent,
  RegisterComponent,
  AuthComponent],
})
export class NgxAuthModule {
}
