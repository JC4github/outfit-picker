import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-outfit-viewer',
  imports: [],
  templateUrl: './outfit-viewer.component.html',
  styleUrl: './outfit-viewer.component.scss'
})

export class OutfitViewerComponent {
  @Input() image: string = '';
}


