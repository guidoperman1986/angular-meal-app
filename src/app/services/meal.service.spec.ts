import { TestBed } from '@angular/core/testing';

import { MealService } from './meal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MealService', () => {
  let service: MealService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should look for all categories', () => {
    service
      .getCategories()
      .subscribe((categories) => expect(categories.length).toBeGreaterThan(0));
  });
});
