import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OptionIceService} from '../../../../@core/services/_service/option-ice.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ngx-action-ice',
  templateUrl: './action-ice.component.html',
  styleUrls: ['./action-ice.component.scss'],
})
export class ActionIceComponent implements OnInit {

  @Input() actionSave: boolean;
  form: FormGroup;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private service: OptionIceService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      options: ['', Validators.required],
    });
  }

  close() {
    this.modal.close();
  }

  processSave() {
    if (this.form.valid) {
      this.spinner.show();
      this.service.saveOrUpdate(this.form.value).subscribe(res => {
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
}
