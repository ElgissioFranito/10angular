import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitaovanaComponent } from './fitaovana.component';

describe('FitaovanaComponent', () => {
  let component: FitaovanaComponent;
  let fixture: ComponentFixture<FitaovanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitaovanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitaovanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
