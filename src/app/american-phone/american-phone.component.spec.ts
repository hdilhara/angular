import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanPhoneComponent } from './american-phone.component';

describe('AmericanPhoneComponent', () => {
  let component: AmericanPhoneComponent;
  let fixture: ComponentFixture<AmericanPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
