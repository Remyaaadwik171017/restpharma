import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmedicineComponent } from './listmedicine.component';

describe('ListmedicineComponent', () => {
  let component: ListmedicineComponent;
  let fixture: ComponentFixture<ListmedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
