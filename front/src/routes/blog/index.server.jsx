import Layout from '../../components/Layout';
import {useShopQuery, RawHtml, Seo} from '@shopify/hydrogen';

import gql from 'graphql-tag';

export default function University() {
  const {data} = useShopQuery({query: QUERY});

  const universityPages = data.pages.edges.map(({node}) => node);

  return (
    <Layout>
      <Seo type="page" data={{}} />
      <h1 className="text-8xl font-primary text-center text-shadow mt-6">
        University
      </h1>
      <div className="container-50 mx-auto mt-6">
        {universityPages.map((page) => (
          <div key={page.id}>
            <h2 className="text-2xl font-primary">
              {page.title.substring('University-'.length)}
            </h2>
            <RawHtml string={page.bodySummary} className="prose mt-8" />
          </div>
        ))}
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query University {
    pages(first: 100) {
      edges {
        node {
          id
          handle
          title
          bodySummary
          updatedAt
        }
      }
    }
  }
`;
