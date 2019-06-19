import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerApiComponent } from './controller-api.component';

describe('ControllerApiComponent', () => {
  let component: ControllerApiComponent;
  let fixture: ComponentFixture<ControllerApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
