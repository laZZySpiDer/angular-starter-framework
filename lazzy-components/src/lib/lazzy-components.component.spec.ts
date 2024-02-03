import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazzyComponentsComponent } from './lazzy-components.component';

describe('LazzyComponentsComponent', () => {
  let component: LazzyComponentsComponent;
  let fixture: ComponentFixture<LazzyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazzyComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazzyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
