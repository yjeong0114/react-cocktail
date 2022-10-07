import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        cocktailname: 'Cocktailname',
        alcohol: 'Alcohol',
        garnish: 'Garnish',
        calories: 'Calories',
    },
    reducers: {
        chooseCocktailname: (state, action) => { state.cocktailname = action.payload},
        chooseAlcohol: (state, action) => { state.alcohol = action.payload},
        chooseGarnish: (state, action) => { state.garnish = action.payload},
        chooseCalories: (state, action) => { state.calories = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseCocktailname, chooseAlcohol, chooseGarnish, chooseCalories } = rootSlice.actions;