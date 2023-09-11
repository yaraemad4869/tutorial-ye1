import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpopularComponent } from './spopular.component';

describe('SpopularComponent', () => {
  let component: SpopularComponent;
  let fixture: ComponentFixture<SpopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpopularComponent]
    });
    fixture = TestBed.createComponent(SpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
