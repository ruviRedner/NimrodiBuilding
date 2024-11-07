//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  floorAccess: [false, false, false, false, false]
};


const floorSlice = createSlice({
  name: "floorAccess",
  initialState,
  reducers: {
    
    changeAccess: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.floorAccess.length) {
        state.floorAccess[index] = !state.floorAccess[index];
      }
    }
  }
});


export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
