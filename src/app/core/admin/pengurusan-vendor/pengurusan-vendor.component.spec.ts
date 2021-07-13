import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanVendorComponent } from './pengurusan-vendor.component';

describe('PengurusanVendorComponent', () => {
  let component: PengurusanVendorComponent;
  let fixture: ComponentFixture<PengurusanVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
