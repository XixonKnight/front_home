import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  @Input() guid: any;

  constructor(
    private modal: NgbActiveModal,
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this.modal.close();
  }

  processDelete() {

  }

}
