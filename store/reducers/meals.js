import {MEALS}  from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initalState = {
  meals: MEALS, 
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal=> meal.id === action.mealId); 
      console.log("existingIndex: " + existingIndex);
      console.log("favoriteMeals: " + state.favoriteMeals);
      if(existingIndex >= 0) {                
          const updatedMeals = [...state.favoriteMeals]; 
          updatedMeals.splice(existingIndex,1);
          console.log('updatedMeals:', updatedMeals)
          return {...state, favoriteMeals: updatedMeals}
        }
        else {
          const selectedMeal = state.meals.find(meal=> meal.id === action.mealId);
          return {...state, favoriteMeals: state.favoriteMeals.concat(selectedMeal)}
        }
      break;  
    default:
      break;
  }
  
  return state;
}

export default mealsReducer;