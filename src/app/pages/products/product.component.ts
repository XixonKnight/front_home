import {Component, OnInit} from '@angular/core';
import {Category} from '../../@core/utils/category';


@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  total: any;
  listData: any[] = [];
  lstDel: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
  }

  delete() {
  }

  processSearch(event: any) {

  }

}
