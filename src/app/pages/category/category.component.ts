import {Component, Inject, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddComponent} from './add/add.component';
import {CategoriesService} from '../../@core/services/_service/categories.service';
import {TranslateService} from '@ngx-translate/core';

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
    private translate: TranslateService,
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
  }

  getList() {
    this.service.getList().subscribe(res => {
      if (res.code === 'success') {
        this.listCategories = res.data;
      }
    });
  }
}
