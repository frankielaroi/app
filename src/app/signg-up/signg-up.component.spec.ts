import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigngUpComponent } from './signg-up.component';

describe('SigngUpComponent', () => {
  let component: SigngUpComponent;
  let fixture: ComponentFixture<SigngUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigngUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigngUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
