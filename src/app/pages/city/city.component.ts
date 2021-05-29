import {Component, OnInit} from '@angular/core';
import {DEFAULT_MODAL_OPTIONS} from '../../@core/app-config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActionCityComponent} from './action-city/action-city.component';
import {CityService} from '../../@core/services/_service/city.service';
import {DeleteCityComponent} from './delete-city/delete-city.component';

@Component({
  selector: 'ngx-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  lstDel: any[] = [];
  total: any;
  listCity: any[] = [];

  constructor(
    private modal: NgbModal,
    private service: CityService,
  ) {
  }

  ngOnInit(): void {
  }

  processSearch(event: any) {
    this.processSearchData(event);
  }

  processEdit(item: any) {
    const modalRef = this.modal.open(ActionCityComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = false;
    modalRef.componentInstance.city = item;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  processSearchData(event?: any) {
    this.service.search(null, event).subscribe(res => {
      this.listCity = res.data;
      this.total = res.recordsTotal;
    });
  }

  processSave() {
    const modalRef = this.modal.open(ActionCityComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = true;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }

  processDelete(id: any) {
    const modalRef = this.modal.open(DeleteCityComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.idCity = id;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData();
      }
    }, (reason) => {
    });
  }
}
