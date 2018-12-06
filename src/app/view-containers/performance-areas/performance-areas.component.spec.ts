import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAreasComponent } from './performance-areas.component';

describe('PerformanceAreasComponent', () => {
  let component: PerformanceAreasComponent;
  let fixture: ComponentFixture<PerformanceAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
