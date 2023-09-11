import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpopularComponent } from './mpopular.component';

describe('MpopularComponent', () => {
  let component: MpopularComponent;
  let fixture: ComponentFixture<MpopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MpopularComponent]
    });
    fixture = TestBed.createComponent(MpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
