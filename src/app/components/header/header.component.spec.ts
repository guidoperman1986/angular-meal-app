import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { categoriesMockData } from '../../mocks/meal-service.mock';
import { MealService } from '../../services/meal.service';

const mockMealService = {
  getCategories: jest.fn().mockReturnValue(of(categoriesMockData)),
};

describe('HomeComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientTestingModule],
      providers: [{ provide: MealService, useValue: mockMealService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCategories method', fakeAsync(()=>{
    component.categories$.subscribe(data => {
        expect(data.length).toBeGreaterThan(0)
    })
  }))
});
