import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCatPageComponent } from './del-cat-page.component';

describe('DelCatPageComponent', () => {
  let component: DelCatPageComponent;
  let fixture: ComponentFixture<DelCatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelCatPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelCatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
