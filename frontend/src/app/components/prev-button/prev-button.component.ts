import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'prev-button',
  imports: [],
  templateUrl: './prev-button.component.html',
  styleUrl: './prev-button.component.scss'
})
export class PrevButtonComponent {
  @Output() clicked = new EventEmitter<void>();
}
