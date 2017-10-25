import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerDashboardComponent } from './reseller-dashboard.component';

describe('ResellerDashboardComponent', () => {
  let component: ResellerDashboardComponent;
  let fixture: ComponentFixture<ResellerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
