import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoCincoComponent } from './paso-cinco.component';

describe('PasoCincoComponent', () => {
  let component: PasoCincoComponent;
  let fixture: ComponentFixture<PasoCincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasoCincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
