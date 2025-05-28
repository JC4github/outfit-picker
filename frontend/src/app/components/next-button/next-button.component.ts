import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'next-button',
  imports: [],
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.scss'
})
export class NextButtonComponent {
  @Output() clicked = new EventEmitter<void>();
}
