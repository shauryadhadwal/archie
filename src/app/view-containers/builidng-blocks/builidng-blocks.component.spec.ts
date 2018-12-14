import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilidngBlocksComponent } from './builidng-blocks.component';

describe('BuilidngBlocksComponent', () => {
  let component: BuilidngBlocksComponent;
  let fixture: ComponentFixture<BuilidngBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilidngBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilidngBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
