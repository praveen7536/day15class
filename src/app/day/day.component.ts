import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div class="form-group">
       <input type="text" class="form-control" id="topicName" placeholder="Enter topic name..">
    </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  values = [];
  count = 0;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addDays() {
    if (this.values.length != 0)
      this.count = this.values[this.values.length - 1].dayNumber;

    this.values.push({ dayNumber: (this.count + 1), id: (this.count + 1) })
    console.log(this.values);

    this.count++;
  }
  addNewTopic = () => {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}



