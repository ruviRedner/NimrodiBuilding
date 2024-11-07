//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const response = await fetch("../data/roles.json");
const roles = await response.json();

const initialState = {
  currentRole: roles[0],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < roles.length) {
        state.currentRole = roles[index];
      }
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
