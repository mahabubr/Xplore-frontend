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
    getBooking: build.query({
      query: (args) => ({
        url: "/booking/user-by",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.booking],
    }),
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useDeleteBookingMutation,
} = bookingApi;
