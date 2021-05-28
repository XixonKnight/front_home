import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DEFAULT_MODAL_OPTIONS} from '../../../@core/app-config';
import {ActionSizeComponent} from './action-size/action-size.component';
import {OptionSizeService} from '../../../@core/services/_service/option-size.service';
import {DeleteSizeComponent} from './delete-size/delete-size.component';

@Component({
  selector: 'ngx-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss'],
})
export class SizeComponent implements OnInit {
  lstSize: any[] = [];
  total: any;

  constructor(
    private modal: NgbModal,
    private service: OptionSizeService,
  ) {
  }

  ngOnInit(): void {
  }

  processSearchData() {
    this.service.findAllData().subscribe(res => {
      if (res.code === 'success') {
        this.lstSize = res.data;
      }
    });
  }

  processSave() {
    const modalRef = this.modal.open(ActionSizeComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.actionSave = true;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  processDelete(id: any) {
    const modalRef = this.modal.open(DeleteSizeComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.idOption = id;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  processEdit(item: any) {
    const modalRef = this.modal.open(ActionSizeComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.actionSave = false;
    modalRef.componentInstance.optionSize = item;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }
}
