import { building } from "$app/environment";
import { data } from "$lib/server/sanityData.js";
const query = `
  *[_type == "person"]{
    name,
      dateOfBirth,
      brief,
      "imageURL": image.asset->url,
        "imageCaption": image.caption
  }
  `;

export async function load({ params }) {
  var people = [];
  if (!building) {
    people = await data(query);
  }
  return {
    body: {
      people,
    },
  };
}
