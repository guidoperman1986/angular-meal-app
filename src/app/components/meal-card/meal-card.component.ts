import { Component, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss'
})
export class MealCardComponent {
  @Input() meal!: Meal;

}
