import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../@core/services/_service/categories.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {CommonUtils} from '../../../@core/services/_service/common-utils.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  isSubmitted = false;
  formAdd: FormGroup;
  fileName: string;
  pathImage: string;
  pathDefault = '../../assets/images/download.jfif';

  constructor(
    private _ngbActiveModal: NgbActiveModal,
    private fb: FormBuilder,
    private service: CategoriesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  close() {
    this._ngbActiveModal.close();
    // this._ngbActiveModal.dismiss('any');
  }

  initForm() {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      multipartFile: [''],
      isCurrent: [''],
    });
  }

  get f() {
    return this.formAdd.controls;
  }

  processAdd() {
    this.isSubmitted = true;
    if (this.formAdd.valid) {
      this.spinner.show();
      this.service.addNew(this.formAdd.value).subscribe(res => {
        this.spinner.hide();
        if (res.code === 'success') {
          this.toastr.success(
            this.translate.instant('message.add.success'),
          );
          this._ngbActiveModal.close('success');
        } else {
          this.toastr.warning(res.message);
        }
      }, error => {
        this.spinner.hide();
        // console.log(error.message);
      });
    }
  }

  processSelectFile(event: any) {
    // this.pathImage = event.target.value;
    const fileName = event.target.value.replace('C:\\fakepath\\', '');
    this.inputFile.nativeElement.value = fileName;
    const render = new FileReader();
    render.onload = () => {
      this.pathImage = render.result.toString();
    };
    render.readAsDataURL(event.target.files[0]);
    this.formAdd.patchValue({
      multipartFile: event.target.files[0],
    });
  }
}
