import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const bookingApi = api.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (data) => ({
        url: "/booking",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
