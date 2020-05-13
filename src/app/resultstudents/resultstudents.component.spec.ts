import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultstudentsComponent } from './resultstudents.component';

describe('ResultstudentsComponent', () => {
  let component: ResultstudentsComponent;
  let fixture: ComponentFixture<ResultstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
