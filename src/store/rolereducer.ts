//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json"

const initialState = {
  currentRole: roles[0],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      
        console.log("gyugy");
        
        state.currentRole = roles[action.payload];
     
      return state
    },
    
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
