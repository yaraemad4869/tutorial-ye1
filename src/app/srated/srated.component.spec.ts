import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SratedComponent } from './srated.component';

describe('SratedComponent', () => {
  let component: SratedComponent;
  let fixture: ComponentFixture<SratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SratedComponent]
    });
    fixture = TestBed.createComponent(SratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
