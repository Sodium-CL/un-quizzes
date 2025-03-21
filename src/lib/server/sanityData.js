import {
  PROJECT_ID,
  DATASET,
  API_VERSION,
  SANITY_READ_TOKEN,
} from "$env/static/private";
import { createClient } from "@sanity/client";
export const data = (query) => {
  const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: API_VERSION,
    token: SANITY_READ_TOKEN,
  });
  return client.fetch(query);
};
