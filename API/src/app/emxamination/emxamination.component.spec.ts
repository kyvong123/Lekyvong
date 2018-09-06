import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmxaminationComponent } from './emxamination.component';

describe('EmxaminationComponent', () => {
  let component: EmxaminationComponent;
  let fixture: ComponentFixture<EmxaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmxaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmxaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
