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
      providesTags: [tagTypes.services],
    }),
    getSingleServices: build.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services],
    }),
  }),
});

export const { useGetServicesQuery, useGetSingleServicesQuery } = servicesApi;
