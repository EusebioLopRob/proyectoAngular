import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info } from './info.component';

describe('Info', () => {
  let component: Info;
  let fixture: ComponentFixture<Info>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Info ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Info);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
