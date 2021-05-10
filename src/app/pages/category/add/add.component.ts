import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../@core/services/_service/categories.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

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
  pathDefault = '../../assets/images/downl oad.jfif';

  constructor(
    private _ngbActiveModal: NgbActiveModal,
    private fb: FormBuilder,
    private service: CategoriesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  close() {
    this._ngbActiveModal.close();
  }

  initForm() {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      link: [''],
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
          this.toastr.success('Thêm mới thành công');
        } else {
          this.toastr.warning(res.message);
        }
      });
    }
  }

  processSelectFile(event: any) {
    // this.pathImage = event.target.value;
    const fileName = event.target.value.replace('C:\\fakepath\\', '');
    this.inputFile.nativeElement.value = fileName;
    const render = new FileReader();
    render.readAsDataURL(event.target.files[0]);
    render.onload = () => {
      this.pathImage = render.result.toString();
    };
  }
}
