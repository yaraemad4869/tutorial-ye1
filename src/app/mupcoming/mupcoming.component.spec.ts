import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MupcomingComponent } from './mupcoming.component';

describe('MupcomingComponent', () => {
  let component: MupcomingComponent;
  let fixture: ComponentFixture<MupcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MupcomingComponent]
    });
    fixture = TestBed.createComponent(MupcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
