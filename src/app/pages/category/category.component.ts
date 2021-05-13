import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddComponent} from './add/add.component';
import {CategoriesService} from '../../@core/services/_service/categories.service';

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

  listCategories: any[] = [];
  selectedProducts: any;

  constructor(
    private modal: NgbModal,
    private service: CategoriesService,
  ) {
  }

  ngOnInit(): void {
    this.getList();
  }

  add() {
    const modalRef = this.modal.open(AddComponent, this.options);
    modalRef.result.then(value => {
      // console.log(value);
      this.getList();
    }).catch(err => {
      // console.log(err);
    });

  }
  delete() {
    console.log(this.selectedProducts);
  }

  getList() {
    this.service.getList().subscribe(res => {
      if (res.code === 'success') {
        this.listCategories = res.data;
      }
    });
  }
}
