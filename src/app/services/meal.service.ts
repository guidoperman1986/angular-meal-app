import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  baseUrl = 'http://themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories.php`)
  }
  
  getMealsByCategory(category: string) {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`)
  }
  
  getFullMealDetails(id: string) {
    return this.http.get(`${this.baseUrl}lookup.php?i=${id}`)
  }

  getIngredientsList() {
    return this.http.get(`${this.baseUrl}/list.php?i=list`);
  }
}
