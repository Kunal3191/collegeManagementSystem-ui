import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RilModelPopupComponent } from './ril-model-popup.component';

describe('RilModelPopupComponent', () => {
  let component: RilModelPopupComponent;
  let fixture: ComponentFixture<RilModelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RilModelPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RilModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
