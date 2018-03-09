import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealNavbarComponent } from './real-navbar.component';

describe('RealNavbarComponent', () => {
  let component: RealNavbarComponent;
  let fixture: ComponentFixture<RealNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
