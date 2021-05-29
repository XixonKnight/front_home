import {Component, OnInit} from '@angular/core';
import {DEFAULT_MODAL_OPTIONS} from '../../../@core/app-config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActionTravelComponent} from './action-travel/action-travel.component';

@Component({
  selector: 'ngx-customer-travel',
  templateUrl: './customer-travel.component.html',
  styleUrls: ['./customer-travel.component.scss'],
})
export class CustomerTravelComponent implements OnInit {
  total: any;
  lstCustomerTravel: any[] = [];
  lstDel: any[] = [];

  constructor(
    private modal: NgbModal,
  ) {
  }

  ngOnInit(): void {
  }

  processSearch(event: any) {

  }

  processSaveOrUpdate() {
    const modalRef = this.modal.open(ActionTravelComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = true;
    modalRef.result.then(value => {
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
