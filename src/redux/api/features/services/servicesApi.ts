import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const servicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.query({
      query: (data) => ({
        url: "/services",
        method: "POST",
        data: data,
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {} = servicesApi;
