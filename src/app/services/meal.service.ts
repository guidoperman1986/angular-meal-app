import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../interfaces/categories.interface';
import { Meal } from '../interfaces/meal.interface';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  baseUrl = 'http://themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<{ categories: Category[] }>(`${this.baseUrl}/categories.php`)
      .pipe(map((categories) => categories.categories));
  }

  getMealsByCategory(category: string) {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }

  getFullMealDetails(id: string) {
    return this.http.get(`${this.baseUrl}lookup.php?i=${id}`);
  }

  getIngredientsList() {
    return this.http.get(`${this.baseUrl}/list.php?i=list`);
  }

  getRandomMeal(): Observable<Meal> {
    return this.http.get<{meals: Meal[]}>(`${this.baseUrl}/random.php`).pipe(map(({meals}) => meals[0]));
  }
}
