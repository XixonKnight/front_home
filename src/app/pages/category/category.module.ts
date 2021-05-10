import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category.component';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from "ngx-spinner";

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
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgxSpinnerModule,
    ],
})
export class CategoryModule {
}
