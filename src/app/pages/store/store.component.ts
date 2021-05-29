import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../@core/services/_service/product.service';
import {StoreService} from '../../@core/services/_service/store.service';
import {ActionProductComponent} from '../product/action-product/action-product.component';
import {DEFAULT_MODAL_OPTIONS} from '../../@core/app-config';
import {ActionStoreComponent} from './action-store/action-store.component';
import {DeleteProductComponent} from '../product/delete-product/delete-product.component';
import {DeleteStoreComponent} from './delete-store/delete-store.component';

@Component({
  selector: 'ngx-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  lstDel: any[] = [];
  total: any;
  listStore: any[] = [];

  constructor(
    private modal: NgbModal,
    private service: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.processSearchData(event);
  }

  processEdit(item: any) {
    const modalRef = this.modal.open(ActionStoreComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = false;
    modalRef.componentInstance.store = item;
    modalRef.result.then(value => {
        if (value === 'success') {
          this.processSearchData();
        }
      },
    );
  }

  processSearchData(event?: any) {
    this.service.search( event, event).subscribe(res => {
      this.listStore = res.data;
      this.total = res.recordsTotal;
    });
  }

  processSave($event: any) {
    const modalRef = this.modal.open(ActionStoreComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = true;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {

    });
  }
  processDelete(id: any) {
    const modalRef = this.modal.open(DeleteStoreComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.idStore = id;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }
}
