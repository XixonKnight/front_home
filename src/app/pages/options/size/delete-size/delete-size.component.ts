import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {OptionSizeService} from '../../../../@core/services/_service/option-size.service';

@Component({
  selector: 'ngx-delete-size',
  templateUrl: './delete-size.component.html',
  styleUrls: ['./delete-size.component.scss'],
})
export class DeleteSizeComponent implements OnInit {
  @Input() idOption: any;

  constructor(
    private modal: NgbActiveModal,
    private service: OptionSizeService,
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
