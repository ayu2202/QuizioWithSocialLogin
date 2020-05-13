import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdContentComponent } from './dash-ad-content.component';

describe('DashAdContentComponent', () => {
  let component: DashAdContentComponent;
  let fixture: ComponentFixture<DashAdContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAdContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
