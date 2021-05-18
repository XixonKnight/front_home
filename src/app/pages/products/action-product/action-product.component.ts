import {Component, OnInit} from '@angular/core';
import {Category} from '../../../@core/utils/category';
import {CategoriesService} from '../../../@core/services/_service/categories.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../@core/services/_service/product.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ngx-action-product',
  templateUrl: './action-product.component.html',
  styleUrls: ['./action-product.component.scss'],
})
export class ActionProductComponent implements OnInit {
  lstCategory: Category[] = [];
  lstSize: any[];
  isSubmitted: boolean = false;
  form: FormGroup;
  isLoadCategory: boolean = false;
  images: File[] = [];

  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder,
    private service: ProductService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.getListCategory();
    this.initForm();
  }

  initForm() {
    this.lstSize = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'},
    ];
    this.form = this.fb.group({
      name: ['', Validators.required],
      guidCategory: ['', {disabled: true}, Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      size: ['', Validators.required],
      description: [''],
      fileImages: [''],
    });
  }

  get f() {
    return this.form.controls;
  }

  getListCategory() {
    this.categoryService.getList().subscribe(res => {
      this.isLoadCategory = true;
      this.lstCategory = res.data;
    });
  }

  onSelect(event) {
    for (const item of event.files) {
      this.images.push(item);
    }
  }

  processSubmit() {
    this.isSubmitted = true;
    this.form.patchValue({
      fileImages: this.images,
    });
    if (this.form.valid) {
      this.spinner.show();
      this.service.saveOrUpdate(this.form.value).subscribe(res => {
        this.spinner.hide();
        if (res.code === 'success') {
          this.toastr.success('Thêm mới thành công');
          this.router.navigate(['/pages/products']);
        } else {
          this.toastr.success(res.message);
        }
      });
    }
  }

  processClear() {
    this.images = [];
  }

  processRemove(event) {
    const index = this.images.indexOf(event.file);
    this.images.splice(index, 1);
  }
}
