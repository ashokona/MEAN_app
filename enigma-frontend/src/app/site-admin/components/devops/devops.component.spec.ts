import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsComponent } from './devops.component';

describe('DevopsComponent', () => {
  let component: DevopsComponent;
  let fixture: ComponentFixture<DevopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
