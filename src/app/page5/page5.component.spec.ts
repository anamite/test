import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5Component } from './page5.component';

describe('Page5Component', () => {
  let component: Page5Component;
  let fixture: ComponentFixture<Page5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page5Component]
    });
    fixture = TestBed.createComponent(Page5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
