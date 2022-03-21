import { useQuery } from 'urql'

const StoreQuery = `
  query {
    products(first:250) {
      edges {
        node {
          id
          handle
          title
          featuredImage {
            url
          }
          createdAt
        }
      }
    }
  }
`

function Store() {
  const [result] = useQuery({
    query: StoreQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p className="mt-12">Oh no... {error.message}</p>

  console.log('data', data)

  return (
    <div className="w100 flex-grow mt-10 px-6">
      {data.products.edges.map(productEdge => (
        <pre>
          {JSON.stringify(productEdge.node, null, 2)}
        </pre>
      ))}
    </div>
  )
}

export default Store
