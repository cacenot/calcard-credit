import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedIllustrationComponent } from './denied-illustration.component';

describe('DeniedIllustrationComponent', () => {
  let component: DeniedIllustrationComponent;
  let fixture: ComponentFixture<DeniedIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
