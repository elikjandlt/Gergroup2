import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const ERXES_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ??
  "https://temuulenenkhmaa.next.erxes.io/gateway/graphql";

const ERXES_APP_TOKEN =
  process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IjhyZnBUaU9sRUYyZjEzcGxpaFRoRCIsImlhdCI6MTc4MjIxNTM5Mn0.lcC911AjgC0w0YR_GEDSzIbWEakXkCOauWT43vgiBuw";

const httpLink = new HttpLink({
  uri: ERXES_ENDPOINT,
  headers: {
    "x-app-token": ERXES_APP_TOKEN,
  },
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

export const link = ApolloLink.from([authLink, httpLink]);
