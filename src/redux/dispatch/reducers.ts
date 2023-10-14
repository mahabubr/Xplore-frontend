import api from "../api/api";
import servicesSlice from "../api/features/services/servicesSlice";

export const reducer = {
  [api.reducerPath]: api.reducer,
  services: servicesSlice,
};
