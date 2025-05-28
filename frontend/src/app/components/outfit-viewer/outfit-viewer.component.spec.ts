import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitViewerComponent } from './outfit-viewer.component';

describe('OutfitViewerComponent', () => {
  let component: OutfitViewerComponent;
  let fixture: ComponentFixture<OutfitViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutfitViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutfitViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
