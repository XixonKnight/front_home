import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {RouterModule, Routes} from '@angular/router';
import {PortletModule} from '../../shares/portlet/portlet.module';
import { NgxPaginationModule } from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SmartTableModule} from 'ng2-smart-table';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PortletModule,
    NgxPaginationModule,
    NgbModule,
    Ng2SmartTableModule,
  ],
})
export class ProductsModule {
}
