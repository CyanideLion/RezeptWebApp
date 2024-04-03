import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCollectionComponent } from './recipeCollection.component';

describe('RezepteComponent', () => {
  let component: RecipeCollectionComponent;
  let fixture: ComponentFixture<RecipeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
