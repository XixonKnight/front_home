import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {RouterModule, Routes} from '@angular/router';
import {PortletModule} from '../../shares/portlet/portlet.module';
import { NgxPaginationModule } from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateModule} from '@ngx-translate/core';
import { ActionProductComponent } from './action-product/action-product.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'add',
    component: ActionProductComponent,
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ActionProductComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PortletModule,
        NgxPaginationModule,
        NgbModule,
        Ng2SmartTableModule,
        TranslateModule,
        DropdownModule,
        InputTextModule,
        MultiSelectModule,
        ButtonModule,
        FileUploadModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
    ],
})
export class ProductsModule {
}
