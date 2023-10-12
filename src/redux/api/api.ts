import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tags/types";
import { BaseUrl } from "@/helpers/config";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});
