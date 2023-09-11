import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MplayingComponent } from './mplaying.component';

describe('MplayingComponent', () => {
  let component: MplayingComponent;
  let fixture: ComponentFixture<MplayingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MplayingComponent]
    });
    fixture = TestBed.createComponent(MplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
