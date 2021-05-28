import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {OptionToppingService} from '../../../../@core/services/_service/option-topping.service';

@Component({
  selector: 'ngx-action-topping',
  templateUrl: './action-topping.component.html',
  styleUrls: ['./action-topping.component.scss'],
})
export class ActionToppingComponent implements OnInit {
  @Input() optionTopping: any;
  @Input() actionSave: any;
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private service: OptionToppingService,
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
        price: [''],
      });
    } else {
      this.form = this.fb.group({
        id: [this.optionTopping.id],
        name: [this.optionTopping.name, Validators.required],
        price: [this.optionTopping.price],
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
