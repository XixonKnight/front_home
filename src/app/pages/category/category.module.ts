import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category.component';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TableModule} from 'primeng/table';
import {PortletModule} from '../../shares/portlet/portlet.module';
import {TranslateModule} from '@ngx-translate/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  // {
  //   path: 'add',
  //   component: AddComponent,
  // },
];

@NgModule({
  declarations: [
    AddComponent,
    CategoryComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxSpinnerModule,
    TableModule,
    PortletModule,
    TranslateModule,
    MessagesModule,
    MessageModule,
  ],
})
export class CategoryModule {
}
