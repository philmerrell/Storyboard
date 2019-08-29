import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlinePage } from './plotline.page';

describe('PlotlinePage', () => {
  let component: PlotlinePage;
  let fixture: ComponentFixture<PlotlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
