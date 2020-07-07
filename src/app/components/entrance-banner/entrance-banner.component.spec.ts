import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceBannerComponent } from './entrance-banner.component';

describe('EntranceBannerComponent', () => {
  let component: EntranceBannerComponent;
  let fixture: ComponentFixture<EntranceBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
