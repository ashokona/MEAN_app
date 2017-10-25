import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerComponent } from './reseller.component';

describe('ResellerComponent', () => {
  let component: ResellerComponent;
  let fixture: ComponentFixture<ResellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
