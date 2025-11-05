import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion8 } from './seccion8';

describe('Seccion8', () => {
  let component: Seccion8;
  let fixture: ComponentFixture<Seccion8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
