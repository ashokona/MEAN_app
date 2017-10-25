import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAdminDashboardComponent } from './cloud-admin-dashboard.component';

describe('CloudAdminDashboardComponent', () => {
  let component: CloudAdminDashboardComponent;
  let fixture: ComponentFixture<CloudAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
