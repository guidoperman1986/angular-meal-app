import { TestBed } from '@angular/core/testing';

import { MealService } from './meal.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { categoriesMockData } from '../mocks/meal-service.mock';

describe('MealService', () => {
  let service: MealService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MealService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should look for all categories', () => {
    service
      .getCategories()
      .subscribe((categories) => expect(categories.length).toBeGreaterThan(0));

    const req = httpTestingController.expectNone(({ url }) => url.startsWith('pato'));
  });
});
