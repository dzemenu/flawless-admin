import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  companyName: "splenor",
  id: "",
  companyEmail: "",
  companyPhone: "",
  address: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  contactOccupation: "",
  loading: false,
  error: false,
}];
export const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {
   
    createClient: (state, action) => {
     //state.loading = false;
      state.push(action.payload);
     
    },
    deleteClient: (state, action) => {
     state.filter((client) => client.id !== action.payload.id);
     // state.loading = false;
    },
    default: (state) => state,
  },
});
export const { getClient, createClient, deleteClient } = clientSlice.actions;

export default clientSlice.reducer;
