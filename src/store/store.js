import { configureStore } from "@reduxjs/toolkit";
import { clientSlice } from "./clientReducer";

const store = configureStore({
    reducer: {
        client: clientSlice.reducer
    }
});
export default store;