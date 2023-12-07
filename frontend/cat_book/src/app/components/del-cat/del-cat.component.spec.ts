import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCatComponent } from './del-cat.component';

describe('DelCatComponent', () => {
  let component: DelCatComponent;
  let fixture: ComponentFixture<DelCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
