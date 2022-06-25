import client from '@sanity/client';

export default client({
  projectId: 'h68wig2g',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-20',
});
