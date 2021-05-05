import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../@core/services/_service/auth/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,

  ) {
  }

  ngOnInit(): void {
    this.disables();
    this.initForm();
  }


  disables() {
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  initForm() {
    this.formRegister = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.formRegister.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.formRegister.valid) {
      this.spinner.show();
      this.service.createUser(this.formRegister.value).subscribe(res => {
        if (res.code === 'success') {
          this.spinner.hide();
          this.router.navigate(['/auth/login']);
          this.toastr.success(res.message);
        } else {
          this.spinner.hide();
          this.toastr.warning(res.message);
        }
      });
    }
  }
}
