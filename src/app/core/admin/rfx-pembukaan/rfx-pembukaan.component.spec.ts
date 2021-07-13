import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfxPembukaanComponent } from './rfx-pembukaan.component';

describe('RfxPembukaanComponent', () => {
  let component: RfxPembukaanComponent;
  let fixture: ComponentFixture<RfxPembukaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfxPembukaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfxPembukaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
