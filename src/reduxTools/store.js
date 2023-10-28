import searchReducer from './searchSlice';

// Import the searchReducer created in the previous code

import { configureStore } from "@reduxjs/toolkit";

// Import the configureStore function from Redux Toolkit

// Create the Redux store
export const store = configureStore({
    reducer: searchReducer
});

// Configure the Redux store using the searchReducer as the root reducer
