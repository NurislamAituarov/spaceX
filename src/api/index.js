import client from '../sanity';

export const getResource = async function () {
  const response = await client.fetch(
    `*[_type == "post"]{
    title,
    slug,
    body,
    mainImage{
      asset -> {
        _id,
        url
      },
      alt
    }
    }`,
  );

  return await response;
};
