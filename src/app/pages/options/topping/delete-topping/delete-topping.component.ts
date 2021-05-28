import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {OptionToppingService} from '../../../../@core/services/_service/option-topping.service';

@Component({
  selector: 'ngx-delete-topping',
  templateUrl: './delete-topping.component.html',
  styleUrls: ['./delete-topping.component.scss'],
})
export class DeleteToppingComponent implements OnInit {
  @Input() idOption: any;

  constructor(
    private modal: NgbActiveModal,
    private service: OptionToppingService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }
  close() {
    this.modal.close();
  }
  processDelete() {
    this.spinner.show();
    this.service.deleteById(this.idOption).subscribe(res => {
      this.spinner.hide();
      if (res.code === 'success') {
        this.modal.close('success');
        this.toastr.success(
          this.translate.instant('message.add.success'));
      } else {
        this.toastr.error(
          this.translate.instant(res.code));
      }
    });
  }
}
