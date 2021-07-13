import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfxAnalisaComponent } from './rfx-analisa.component';

describe('RfxAnalisaComponent', () => {
  let component: RfxAnalisaComponent;
  let fixture: ComponentFixture<RfxAnalisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfxAnalisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfxAnalisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
