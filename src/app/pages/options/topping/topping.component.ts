import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OptionToppingService} from '../../../@core/services/_service/option-topping.service';
import {DEFAULT_MODAL_OPTIONS} from '../../../@core/app-config';
import {ActionToppingComponent} from './action-topping/action-topping.component';
import {DeleteToppingComponent} from './delete-topping/delete-topping.component';

@Component({
  selector: 'ngx-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss'],
})
export class ToppingComponent implements OnInit {
  lstTopping: any[] = [];
  lstDel: any[] = [];
  total: any;

  constructor(
    private modal: NgbModal,
    private service: OptionToppingService,
  ) {
  }

  ngOnInit(): void {
  }

  processSave() {
    const modalRef = this.modal.open(ActionToppingComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.actionSave = true;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  processEdit(item: any) {
    const modalRef = this.modal.open(ActionToppingComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.actionSave = false;
    modalRef.componentInstance.optionTopping = item;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  processSearch(event: any) {
    this.processSearchData(event);
  }

  processSearchData(event?: any) {
    this.service.search(null, event).subscribe(res => {
      this.lstTopping = res.data;
      this.total = res.recordsTotal;
    });
  }

  processDelete(id: any) {
    const modalRef = this.modal.open(DeleteToppingComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.idOption = id;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }
}
