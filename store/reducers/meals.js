import {MEALS}  from '../../data/dummy-data';
import { TOGGLE_FAVORITE, APPLY_FILTERS } from '../actions/meals';

const initalState = {
  meals: MEALS, 
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal=> meal.id === action.mealId); 
    
      if(existingIndex >= 0) {                
          const updatedMeals = [...state.favoriteMeals]; 
          updatedMeals.splice(existingIndex,1);       
          return {...state, favoriteMeals: updatedMeals}
        }
        else {
          const selectedMeal = state.meals.find(meal=> meal.id === action.mealId);
          return {...state, favoriteMeals: state.favoriteMeals.concat(selectedMeal)}
        }
      break;  
    case APPLY_FILTERS:              
      const filters = action.appliedFilters;            
      console.log(filters);

      const updatedFilteredMeals = state.meals.filter(meal => {                        
        if(filters.glutenFree && !meal.isGlutenFree)
          return false;
        if(filters.vegan && !meal.isVegan)
          return false;
        if(filters.vegetarian && !meal.isVegetarian)
          return false;
        if(filters.lactoseFree && !meal.isLactoseFree)
          return false;
        
        return true;
      });    
                    
      return {...state, filteredMeals: updatedFilteredMeals}            
      default:
      break;
  }
  
  return state;
}

export default mealsReducer;