import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-action-travel',
  templateUrl: './action-travel.component.html',
  styleUrls: ['./action-travel.component.scss'],
})
export class ActionTravelComponent implements OnInit {
  @Input() action: any;
  isSubmitted = false;

  constructor(
    private modal: NgbActiveModal,
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this.modal.close();
  }

  processSaveOrUpdate() {
    this.isSubmitted = true;

  }
}
