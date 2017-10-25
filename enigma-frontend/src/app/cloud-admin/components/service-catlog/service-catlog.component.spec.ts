import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatlogComponent } from './service-catlog.component';

describe('ServiceCatlogComponent', () => {
  let component: ServiceCatlogComponent;
  let fixture: ComponentFixture<ServiceCatlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCatlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
