import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSearchSelectComponent } from './multi-search-select.component';

describe('MultiSearchSelectComponent', () => {
  let component: MultiSearchSelectComponent;
  let fixture: ComponentFixture<MultiSearchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSearchSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
