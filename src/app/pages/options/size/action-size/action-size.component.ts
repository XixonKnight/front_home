import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {OptionSizeService} from '../../../../@core/services/_service/option-size.service';

@Component({
  selector: 'ngx-action-size',
  templateUrl: './action-size.component.html',
  styleUrls: ['./action-size.component.scss'],
})
export class ActionSizeComponent implements OnInit {
  @Input() optionSize: any;
  @Input() actionSave: any;
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private service: OptionSizeService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (this.actionSave) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        extraPrice: [''],
      });
    } else {
      this.form = this.fb.group({
        id: [this.optionSize.id],
        name: [this.optionSize.name, Validators.required],
        extraPrice: [this.optionSize.extraPrice],
      });
    }
  }

  get f() {
    return this.form.controls;
  }

  close() {
    this.modal.close();
  }

  processSave() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.spinner.show();
      this.service.saveOrUpdate(this.form.value).subscribe(res => {
        this.spinner.hide();
        if (res.code === 'success') {
          this.modal.close('success');
          this.toastr.success(
            this.translate.instant('message.add.success'),
          );
        } else {
          this.toastr.error(
            this.translate.instant(res.code),
          );
        }
      });
    }
  }
}
