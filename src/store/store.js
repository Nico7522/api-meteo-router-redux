import { configureStore } from "@reduxjs/toolkit";
import meteoReducer from "./reducers/meteo.reducer";
import searchReeducer from "./reducers/search.reducer";

const store = configureStore({
  reducer: {
    meteo: meteoReducer,
    search: searchReeducer
  },
  devTools: import.meta.env.DEV,
});

export default store;
