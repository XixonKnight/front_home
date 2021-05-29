import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CityService} from '../../@core/services/_service/city.service';
import {DEFAULT_MODAL_OPTIONS} from '../../@core/app-config';
import {ActionProductComponent} from './action-product/action-product.component';
import {ProductService} from '../../@core/services/_service/product.service';
import {ActionCityComponent} from '../city/action-city/action-city.component';
import {DeleteCityComponent} from '../city/delete-city/delete-city.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  lstDel: any[] = [];
  total: any;
  listProduct: any[] = [];

  constructor(
    private modal: NgbModal,
    private service: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.processSearchData(event);
  }

  processEdit(item: any) {
    const modalRef = this.modal.open(ActionProductComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = false;
    modalRef.componentInstance.product = item;
    modalRef.result.then(value => {
        if (value === 'success') {
          this.processSearchData();
        }
      },
    );
  }

  processSearchData(event?: any) {
    this.service.search(null, event).subscribe(res => {
      this.listProduct = res.data;
      this.total = res.recordsTotal;
    });
  }

  processSave($event: any) {
    const modalRef = this.modal.open(ActionProductComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = true;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {

    });
  }

  processDelete(id: any) {
    const modalRef = this.modal.open(DeleteProductComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.idProduct = id;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }
}
