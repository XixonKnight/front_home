import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SizeComponent} from './size/size.component';
import {IceComponent} from './ice/ice.component';
import {ToppingComponent} from './topping/topping.component';
import {RouterModule, Routes} from '@angular/router';
import {PortletModule} from '../../shares/portlet/portlet.module';
import {TooltipModule} from 'primeng/tooltip';
import {TranslateModule} from '@ngx-translate/core';
import { ActionIceComponent } from './ice/action-ice/action-ice.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteIceComponent } from './ice/delete-ice/delete-ice.component';
import { ActionSizeComponent } from './size/action-size/action-size.component';
import { DeleteSizeComponent } from './size/delete-size/delete-size.component';
import { ActionToppingComponent } from './topping/action-topping/action-topping.component';
import { DeleteToppingComponent } from './topping/delete-topping/delete-topping.component';

const routes: Routes = [
  {
    path: 'size',
    component: SizeComponent,
  },
  {
    path: 'topping',
    component: ToppingComponent,
  },
  {
    path: 'ice',
    component: IceComponent,
  },
];


@NgModule({
  declarations: [SizeComponent, IceComponent, ToppingComponent, ActionIceComponent, DeleteIceComponent, ActionSizeComponent, DeleteSizeComponent, ActionToppingComponent, DeleteToppingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PortletModule,
    TooltipModule,
    TranslateModule,
    NgxSpinnerModule,
    TableModule,
    RadioButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class OptionsModule {
}
