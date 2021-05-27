import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActionIceComponent} from './action-ice/action-ice.component';
import {DEFAULT_MODAL_OPTIONS} from '../../../@core/app-config';
import {OptionIceService} from '../../../@core/services/_service/option-ice.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {DeleteIceComponent} from './delete-ice/delete-ice.component';

@Component({
  selector: 'ngx-ice',
  templateUrl: './ice.component.html',
  styleUrls: ['./ice.component.scss'],
})
export class IceComponent implements OnInit {
  lstIce: any[] = [];
  lstDel: any[] = [];
  total: any;

  constructor(
    private modal: NgbModal,
    private service: OptionIceService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
  }

  processSave() {
    const modalRef = this.modal.open(ActionIceComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.actionSave = true;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  // public processSearch() {
  //   this.processSearchData();
  // }


  processSearchData() {
    this.service.findAllData().subscribe(res => {
      if (res.code === 'success') {
        this.lstIce = res.data;
      }
    });
  }

  processDelete(id: any) {
    const modalRef = this.modal.open(DeleteIceComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.idOption = id;
    modalRef.result.then(result => {
      if (result === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }
}
