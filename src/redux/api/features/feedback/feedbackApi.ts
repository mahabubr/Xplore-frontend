import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const feedbackApi = api.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: (data) => ({
        url: "/feedback",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useCreateFeedbackMutation } = feedbackApi;
