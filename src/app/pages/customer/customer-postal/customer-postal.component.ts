import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-postal',
  templateUrl: './customer-postal.component.html',
  styleUrls: ['./customer-postal.component.scss'],
})
export class CustomerPostalComponent implements OnInit {
  total: any;
  lstCustomerPostal: any[] = [];
  lstDel: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  processSearch(event: any) {

  }

}
