import {LocalizationProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';

import Header from './Header.client';
import Footer from './Footer.client';
import Cart from './Cart.client';

export default function Layout({children}) {
  return (
    <LocalizationProvider preload="*">
      <div className="bg-primary text-white min-h-screen min-w-fit flex flex-col">
        <Suspense fallback={null}>
          <Header />
          <Cart />
        </Suspense>
        <div className="mt-2 flex-grow">{children}</div>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LocalizationProvider>
  );
}
