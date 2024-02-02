import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrfumaterialComponent } from './urfumaterial.component';

describe('UrfumaterialComponent', () => {
  let component: UrfumaterialComponent;
  let fixture: ComponentFixture<UrfumaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrfumaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrfumaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
