import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MealService } from './services/meal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mealApp';
  mealService = inject(MealService)

  ngOnInit(): void {
      this.mealService.getIngredientsList().subscribe(data=>console.log(data))
  }

}
