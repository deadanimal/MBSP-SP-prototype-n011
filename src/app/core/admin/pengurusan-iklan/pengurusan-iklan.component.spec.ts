import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanIklanComponent } from './pengurusan-iklan.component';

describe('PengurusanIklanComponent', () => {
  let component: PengurusanIklanComponent;
  let fixture: ComponentFixture<PengurusanIklanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanIklanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanIklanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
