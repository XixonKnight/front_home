import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'ngx-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  lstDel: any[] = [];
  items: MenuItem[];


  constructor(
    private modal: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.items = [
    ];
  }

  processSave() {

  }

  processDelete() {
  }
  processSearch(){}

}
