import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import type { DocumentNode } from "graphql";
import { cookies } from "next/headers";

const ERXES_ENDPOINT =
  process.env.GRAPHQL_URL ??
  process.env.NEXT_PUBLIC_GRAPHQL_URL ??
  "https://temuulenenkhmaa.next.erxes.io/gateway/graphql";

const ERXES_APP_TOKEN =
  process.env.ERXES_APP_TOKEN ??
  process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IjhyZnBUaU9sRUYyZjEzcGxpaFRoRCIsImlhdCI6MTc4MjIxNTM5Mn0.lcC911AjgC0w0YR_GEDSzIbWEakXkCOauWT43vgiBuw";

export async function getServerApolloClient() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return new ApolloClient({
    link: new HttpLink({
      uri: ERXES_ENDPOINT,
      headers: {
        "x-app-token": ERXES_APP_TOKEN,
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      fetchOptions: { cache: "no-store" },
    }),
    cache: new InMemoryCache(),
  });
}

export async function safeQuery<TData>(
  query: DocumentNode,
  variables?: Record<string, unknown>
): Promise<TData | null> {
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<TData>({
      query,
      variables,
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    return data ?? null;
  } catch {
    return null;
  }
}
