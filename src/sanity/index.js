import client from '@sanity/client';

export default client({
  projectId: 'ntw114bu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-20',
});
