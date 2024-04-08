import { Component, OnInit, inject } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../interfaces/meal.interface';
import { delay, expand, interval, switchMap, take, tap } from 'rxjs';
import { MealCardComponent } from '../../components/meal-card/meal-card.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MealCardComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  mealService = inject(MealService);

  randomMeals: Meal[] = [];

  ngOnInit(): void {
    const httpCalls = interval(1000);

    httpCalls.pipe(
      switchMap(()=>this.mealService.getRandomMeal()),
      tap(meal=>{
        this.randomMeals.push(meal)
      }),
      take(6),
    ).subscribe({
      next: () => {
        console.log(this.randomMeals)
      }
    })

  }
}
