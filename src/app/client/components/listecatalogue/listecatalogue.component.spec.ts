import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecatalogueComponent } from './listecatalogue.component';

describe('ListecatalogueComponent', () => {
  let component: ListecatalogueComponent;
  let fixture: ComponentFixture<ListecatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
