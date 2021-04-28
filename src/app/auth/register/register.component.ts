import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.disables();
    // this.addClassActive();
  }

  disables() {
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  addClassActive() {
    const parent = document.querySelector('.carousel-indicators');
    // console.log(parent.childNodes);
    parent.childNodes.forEach(item => {
      item.addEventListener('click', function () {
        item.classList.add('active');
      });
    });
  }
  // addClassFocusForInput() {
  //   let inputs = document.querySelectorAll('.form-control');
  //   inputs.forEach(input => {
  //     input.addEventListener('focus', function() {
  //       let parent = this.parentNode.parentNode;
  //       parent.classList.add('focus');
  //     });
  //     input.addEventListener('blur', function() {
  //       let parent = this.parentNode.parentNode;
  //       if (this.value == '') {
  //         parent.classList.remove('focus');
  //       }
  //     });
  //   });
}
