import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuenta } from './cuenta.component';

describe('Cuenta', () => {
  let component: Cuenta;
  let fixture: ComponentFixture<Cuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuenta ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuenta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
