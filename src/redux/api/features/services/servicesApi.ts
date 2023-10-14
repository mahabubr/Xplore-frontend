import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const servicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query({
      query: (args) => ({
        url: "/services",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;
