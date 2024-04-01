import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  mealService = inject(MealService)
  categories$: Observable<Category[]> = this.mealService.getCategories()

  ngOnInit(): void {
      /* this.categories$.subscribe(data=>console.log(data)) */
  }

}
