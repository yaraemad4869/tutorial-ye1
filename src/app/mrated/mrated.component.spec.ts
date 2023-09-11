import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MratedComponent } from './mrated.component';

describe('MratedComponent', () => {
  let component: MratedComponent;
  let fixture: ComponentFixture<MratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MratedComponent]
    });
    fixture = TestBed.createComponent(MratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
