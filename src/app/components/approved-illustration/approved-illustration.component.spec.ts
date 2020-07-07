import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedIllustrationComponent } from './approved-illustration.component';

describe('ApprovedIllustrationComponent', () => {
  let component: ApprovedIllustrationComponent;
  let fixture: ComponentFixture<ApprovedIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
