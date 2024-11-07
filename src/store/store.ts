// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import floorreducer from "../store/floorreducer";
import rolereducer from "../store/rolereducer";

export const store = configureStore({
  reducer: {
    floorAccess: floorreducer,
    role: rolereducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
