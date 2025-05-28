import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { OutfitViewerComponent } from '../../components/outfit-viewer/outfit-viewer.component';
import { PrevButtonComponent } from '../../components/prev-button/prev-button.component';
import { NextButtonComponent } from '../../components/next-button/next-button.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, OutfitViewerComponent, PrevButtonComponent, NextButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images: string[] = [
    'assets/images/top-1.png',
    'assets/images/top-2.png',
    'assets/images/top-3.png',
  ];

  currentIndex = 0;

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  goNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
