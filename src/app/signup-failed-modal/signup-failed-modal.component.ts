import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup-failed-modal',
  templateUrl: './signup-failed-modal.component.html',
  styleUrls: ['./signup-failed-modal.component.css']
})
export class SignupFailedModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  // Function to close the modal when the "OK" button is clicked
  close() {
    this.closeModal.emit();
  }
}
