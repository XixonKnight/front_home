import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoriesService} from '../../../@core/services/_service/categories.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {Category} from '../../../@core/utils/category';

@Component({
  selector: 'ngx-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  @Input() objDel: Array<Category>;

  constructor(
    private modal: NgbActiveModal,
    private service: CategoriesService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this.modal.close();
  }

  processDelete() {
    const lstID: Array<number> = [];
    this.objDel.forEach(item => lstID.push(item.id));
    this.service.deleteCategories(lstID).subscribe(res => {
    });
    // this.spinner.show();
    // this.objDel.forEach(item => {
    //   this.service.deleteById(item.id).subscribe(res => {
    //     if (res.code === 'success') {
    //       this.toastr.success(
    //         this.translate.instant('message.delete.success'),
    //       );
    //     } else {
    //       this.translate.instant(res.message);
    //     }
    //   });
    // });
    // setTimeout(() => {
    //   this.spinner.hide();
    //   this.modal.close('success');
    // }, 3000);
  }
}
