import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDrawerLayoutComponent } from './nav-drawer-layout.component';

describe('NavDrawerLayoutComponent', () => {
  let component: NavDrawerLayoutComponent;
  let fixture: ComponentFixture<NavDrawerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavDrawerLayoutComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDrawerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
