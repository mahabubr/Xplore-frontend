import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getProfile: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAllUser: build.query({
      query: (args) => ({
        url: "/user",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetProfileQuery,
  useUpdateUserMutation,
  useGetAllUserQuery,
} = userApi;
