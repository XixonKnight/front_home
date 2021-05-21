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
  total: any;
  listCategories: any[] = [];
  lstDel: any[] = [];
  options: any = {
    backdrop: 'static',
    keyboard: false,
    size: 'lg',
    centered: true,
  };

  constructor(
    private modal: NgbModal,
    private service: CategoriesService,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    const modalRef = this.modal.open(AddComponent, this.options);
    modalRef.result.then(value => {
      //   if (value === 'success')
      //     this.getList();
      // }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  delete() {
    const modalRef = this.modal.open(DeleteComponent, this.options);
    modalRef.componentInstance.objDel = this.lstDel;
    modalRef.result.then(value => {
      // if (value === 'success');
      //   // this.getList();
      //   }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // getList() {
  //   this.service.getList().subscribe(res => {
  //     // if (res.code === 'success') {
  //     this.listCategories = res.data;
  //     // console.log(res.data);
  //     this.total = res.recordsTotal;
  //   });
  // }

  public processSearch(event: any) {
    this.service.search(null, event).subscribe(res => {
      this.listCategories = res.data;
      this.total = res.recordsTotal;
    });
  }
}
