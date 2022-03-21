import { createClient } from 'urql'

const client = createClient({
  url: 'https://via-bellum.myshopify.com/api/2022-01/graphql.json',
  fetchOptions: () => ({
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': 'd8eaa61ffad11aecb5541b416f228ee9',
    },
  }),
})

export default client
