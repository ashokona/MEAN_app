import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDashboardComponent } from './tenant-dashboard.component';

describe('TenantDashboardComponent', () => {
  let component: TenantDashboardComponent;
  let fixture: ComponentFixture<TenantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
