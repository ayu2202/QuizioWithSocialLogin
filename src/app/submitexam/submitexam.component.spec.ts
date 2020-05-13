import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitexamComponent } from './submitexam.component';

describe('SubmitexamComponent', () => {
  let component: SubmitexamComponent;
  let fixture: ComponentFixture<SubmitexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
