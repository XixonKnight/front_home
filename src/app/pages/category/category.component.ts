import {Component, Inject, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddComponent} from './add/add.component';
import {CategoriesService} from '../../@core/services/_service/categories.service';
import {TranslateService} from '@ngx-translate/core';
import {DeleteComponent} from './delete/delete.component';

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
  lstDel: any[] = [];

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
      if (value === 'success')
        this.getList();
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  delete() {
    const modalRef = this.modal.open(DeleteComponent, this.options);
    modalRef.result.then(value => {
      if (value === 'success')
        this.getList();
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getList() {
    this.service.getList().subscribe(res => {
      if (res.code === 'success') {
        this.listCategories = res.data;
      }
    });
  }
}
