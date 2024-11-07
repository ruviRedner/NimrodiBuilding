//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json"

const initialState =  roles[0]
  


const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < roles.length) {
        state = roles[index];
      }
      return state
    },
    
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
