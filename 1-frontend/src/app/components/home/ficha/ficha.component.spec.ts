import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ficha } from './ficha.component';

describe('Ficha', () => {
  let component: Ficha;
  let fixture: ComponentFixture<Ficha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ficha ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ficha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
