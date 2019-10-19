import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDeliveryComponent } from './make-delivery.component';

describe('MakeDeliveryComponent', () => {
  let component: MakeDeliveryComponent;
  let fixture: ComponentFixture<MakeDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
