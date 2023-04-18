import { configureStore } from "@reduxjs/toolkit";
import meteoReducer from "./reducers/meteo.reducer";
import searchReeducer from "./reducers/search.reducer";
import langReducer from "./reducers/setLang.reducer";
import {  weatherReducer } from "./reducers/weather.reducer";

const store = configureStore({
  reducer: {
    meteo: meteoReducer,
    search: searchReeducer,
    language: langReducer,
    weather: weatherReducer
  },
  devTools: import.meta.env.DEV,
});

export default store;
