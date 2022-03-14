import CartIcon from './CartIcon';
import Header from './Header.client';
import OpenIcon from './OpenIcon';

/**
 * A shared component and Suspense call that's used in `App.server.jsx` to let your app wait for code to load while declaring a loading state
 */
export default function LoadingFallback() {
  return (
    <div className="bg-primary min-w-full min-h-screen">
      <Header />
    </div>
  );
}
