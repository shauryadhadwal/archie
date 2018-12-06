import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCapabilitiesComponent } from './business-capabilities.component';

describe('BusinessCapabilitiesComponent', () => {
  let component: BusinessCapabilitiesComponent;
  let fixture: ComponentFixture<BusinessCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
