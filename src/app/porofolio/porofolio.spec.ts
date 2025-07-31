import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porofolio } from './porofolio';

describe('Porofolio', () => {
  let component: Porofolio;
  let fixture: ComponentFixture<Porofolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Porofolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Porofolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
