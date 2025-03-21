import { data } from "$lib/server/sanityData.js";
const queryPerson = `
  *[_type == "person"]{
    name,
      dateOfBirth,
      brief,
      "imageURL": image.asset->url,
        "imageCaption": image.caption
  }
  `;
const queryUqHero = `
  *[ _type == "uq-hero"] {
    title,
    'imageURLs': image[].asset->url,
    'description': description[].children
  }
  `;

export async function load({ params }) {
  const people = await data(queryPerson);
  const uqHero = await data(queryUqHero);
  return {
    body: {
      people,
      uqHero,
    },
  };
}
