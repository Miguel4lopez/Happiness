import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion7 } from './seccion7';

describe('Seccion7', () => {
  let component: Seccion7;
  let fixture: ComponentFixture<Seccion7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
