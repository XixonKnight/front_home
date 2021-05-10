import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddComponent} from './add/add.component';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  options: any = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'lg',
  };

  constructor(
    private modal: NgbModal,
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    const modalRef = this.modal.open(AddComponent, this.options);
    modalRef.result.then(value => {
      // console.log(value);
    }).catch(err => {
      // console.log(err);
    });

  }
}
