import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goods } from './goods';

describe('Goods', () => {
  let component: Goods;
  let fixture: ComponentFixture<Goods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
