import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorsForComponent } from './form-errors-for.component';

describe('FormErrorsForComponent', () => {
  let component: FormErrorsForComponent;
  let fixture: ComponentFixture<FormErrorsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorsForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
