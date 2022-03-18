import {Image} from '@shopify/hydrogen';
// import {useShopQuery, flattenConnection, Link} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';
// import gql from 'graphql-tag';
// import {Suspense} from 'react';

import {Suspense} from 'react';
import RotatingButton from './RotatingButton.client';
import ScrollMouse from './ScrollMouse.client';
// function ExternalIcon() {
//   return (
//     <svg
//       className="ml-3"
//       width="15"
//       height="14"
//       viewBox="0 0 15 14"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//     >
//       <path d="M8.11963 0.000976562C7.56734 0.000976562 7.11963 0.448692 7.11963 1.00098C7.11963 1.55326 7.56734 2.00098 8.11963 2.00098H10.7054L4.41252 8.29387C4.022 8.68439 4.022 9.31756 4.41252 9.70808C4.80305 10.0986 5.43621 10.0986 5.82674 9.70808L12.1196 3.41519V6.00098C12.1196 6.55326 12.5673 7.00098 13.1196 7.00098C13.6719 7.00098 14.1196 6.55326 14.1196 6.00098V1.00098C14.1196 0.448692 13.6719 0.000976562 13.1196 0.000976562H8.11963Z" />
//       <path d="M2.11963 2.00098C1.01506 2.00098 0.119629 2.89641 0.119629 4.00098V12.001C0.119629 13.1055 1.01506 14.001 2.11963 14.001H10.1196C11.2242 14.001 12.1196 13.1055 12.1196 12.001V9.00098C12.1196 8.44869 11.6719 8.00098 11.1196 8.00098C10.5673 8.00098 10.1196 8.44869 10.1196 9.00098V12.001H2.11963V4.00098L5.11963 4.00098C5.67191 4.00098 6.11963 3.55326 6.11963 3.00098C6.11963 2.44869 5.67191 2.00098 5.11963 2.00098H2.11963Z" />
//     </svg>
//   );
// }

// function DocsButton({url, label}) {
//   return (
//     <a
//       href={url}
//       target="_blank"
//       className="bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80"
//       rel="noreferrer"
//     >
//       {label}
//       <ExternalIcon />
//     </a>
//   );
// }

// function BoxFallback() {
//   return (
//     <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900 h-60"></div>
//   );
// }

// function StorefrontInfo() {
//   const {data} = useShopQuery({query: QUERY, preload: true});
//   const shopName = data ? data.shop.name : '';
//   const products = data && flattenConnection(data.products);
//   const collections = data && flattenConnection(data.collections);
//   const totalProducts = products && products.length;
//   const totalCollections = collections && collections.length;

//   const pluralize = (count, noun, suffix = 's') =>
//     `${count} ${noun}${count === 1 ? '' : suffix}`;
//   return (
//     <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900">
//       <p className="text-md font-medium uppercase mb-4">Connected Storefront</p>
//       <h2 className="text-2xl font-bold mb-4">{shopName}</h2>
//       <p className="text-md">
//         {pluralize(totalProducts, 'Product')}
//         {', '}
//         {pluralize(totalCollections, 'Collection')}
//       </p>
//       {totalProducts === 0 && totalCollections === 0 && (
//         <div className="py-2 px-3 bg-red-100 text-md">
//           Use the{' '}
//           <a
//             href="https://shopify.dev/apps/tools/cli/getting-started"
//             className="text-primary font-mono font-bold underline"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Shopify CLI
//           </a>{' '}
//           to populate sample products and collections.
//         </div>
//       )}
//       <hr className="my-4" />
//       <a
//         href="https://shopify.dev/custom-storefronts/hydrogen/getting-started/create#step-2-update-information-about-your-shopify-storefront"
//         className="text-md inline-flex items-center text-blue-700 font-medium hover:underline"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Change your storefront access token
//         <ExternalIcon />
//       </a>
//     </div>
//   );
// }

// function TemplateLinks() {
//   const {data} = useShopQuery({query: QUERY, preload: true});
//   const products = data && flattenConnection(data.products);
//   const collections = data && flattenConnection(data.collections);

//   const firstProduct = products && products.length ? products[0].handle : '';
//   const firstCollection = collections[0] ? collections[0].handle : '';

//   return (
//     <div className="bg-white p-12 md:p-12 shadow-xl rounded-xl text-gray-900">
//       <p className="text-md font-medium uppercase mb-4">
//         Explore the templates
//       </p>
//       <ul>
//         <li className="mb-4">
//           <Link
//             to={`/collections/${firstCollection}`}
//             className="text-md font-medium text-blue-700 hover:underline"
//           >
//             Collection template
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link
//             to={`/products/${firstProduct}`}
//             className="text-md font-medium text-blue-700 hover:underline"
//           >
//             Product template
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/error-page"
//             className="text-md font-medium text-blue-700 hover:underline"
//           >
//             404 template
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  return (
    <div className="relative overflow-hidden" style={{minHeight: 1080}}>
      <div className="absolute" style={{left: -512, right: -512, top: 600}}>
        <svg
          className="w-full h-96"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,50 50,0 100,50 50,100"
            className="fill-primary-darker"
            strokeWidth="0"
          />
        </svg>
      </div>
      <div className="absolute top-0" style={{right: -84}}>
        <Image
          src="/images/japanese-trooper-cropped.png"
          width={(864 / 1618) * 1080 * 0.75}
          height={1080 * 0.75}
        />
      </div>
      <div className="absolute top-0" style={{left: -84}}>
        <Image
          src="/images/japanese-trooper-cropped.png"
          width={(864 / 1618) * 1080 * 0.75}
          height={1080 * 0.75}
          style={{transform: 'scale(-1, 1)'}}
        />
      </div>
      <div className="relative container mx-auto pt-32">
        <h1 className="text-8xl font-primary text-white text-center text-shadow">
          Collect, Paint, Command.
        </h1>
        <sub className="text-2xl text-white text-center block mt-12">
          Live your hobby to the fullest with high-standard models.
          <br />
          Meet like-minded people to compete against.
        </sub>
        <div className="mt-16">
          <div className="w-full flex flex-col justify-center items-center">
            <Suspense fallback={null}>
              <Link to="army-creator">
                <RotatingButton>Create your army</RotatingButton>
              </Link>
              <div className="mt-64">
                <ScrollMouse />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

// const QUERY = gql`
//   query welcomeContent {
//     shop {
//       name
//     }
//     products(first: 250) {
//       edges {
//         node {
//           handle
//         }
//       }
//     }
//     collections(first: 250) {
//       edges {
//         node {
//           handle
//         }
//       }
//     }
//   }
// `;