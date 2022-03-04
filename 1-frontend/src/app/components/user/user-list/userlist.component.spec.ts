import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlist } from './userlist.component';

describe('Userlist', () => {
  let component: Userlist;
  let fixture: ComponentFixture<Userlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userlist ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Userlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
