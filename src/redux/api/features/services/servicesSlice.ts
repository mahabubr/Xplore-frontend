import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface ServicesState {
  services: any[]; // Replace 'any' with a more specific type if possible
}

const initialState: ServicesState = {
  services: [],
};

// Create a services slice
const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    storeProduct: (state, action: PayloadAction<AnyAction>) => {
      if (action.payload) {
        const isItemAlreadyInArray = state.services.some((serv) => {
          return serv.id === action.payload.id;
        });

        if (!isItemAlreadyInArray) {
          state.services.push(action.payload);
        }
      }
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.services = state.services.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    resetProduct: (state) => {
      state.services = [];
    },
  },
});

// Export the action creators
export const { storeProduct, removeProduct, resetProduct } =
  servicesSlice.actions;

// Export the reducer
export default servicesSlice.reducer;
