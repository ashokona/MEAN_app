import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaComponent } from './sla.component';

describe('SlaComponent', () => {
  let component: SlaComponent;
  let fixture: ComponentFixture<SlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
