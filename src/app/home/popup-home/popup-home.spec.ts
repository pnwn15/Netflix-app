import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHome } from './popup-home';

describe('PopupHome', () => {
  let component: PopupHome;
  let fixture: ComponentFixture<PopupHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
