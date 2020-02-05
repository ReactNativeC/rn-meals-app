export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const APPLY_FILTERS = 'APPLY_FILTERS';

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE, 
    mealId: id
  }
};

export const applyFilters = (appliedFilters) => {
  return {
    type: APPLY_FILTERS, 
    appliedFilters: appliedFilters
  }
}

