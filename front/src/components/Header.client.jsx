import {useEffect, useState} from 'react';
import {Link, Image} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
// import CountrySelector from './CountrySelector.client';
// import Navigation from './Navigation.client';
// import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  // useEffect(() => {
  //   const scrollbarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;

  //   setScrollbarWidth(scrollbarWidth);
  // }, [isCartOpen]);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full h-24 relative">
      <div className="absolute left-0 right-0 top-12">
        <div className="header-lore">
          The way of war! In a parallel universe, the 12 gods decided to select
          samples of their greatest civilizations so they can survive the
          passing of time, learn how to use technology and magic, and advance in
          warfare. They are out for war! Who will triumph and become the alpha
          god? To the victor the spoils! They collide in epic battles against
          each other, using the deadliest technologies, the most monstrous
          mythological creatures, the most relentless magic, and of course,
          their wits and will.
        </div>
        <div className="header-lore-fader">
          <div />
          <div />
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0">
        <div className="w-full h-12 bg-secondary text-primary flex items-center justify-between">
          <div className="w-32" />
          <div className="flex items-center justify-center">
            <Link href="/store" className="header-link">
              Store
            </Link>
            <div style={{width: 256 - 64}} />
            <Link href="/blog" className="header-link">
              Blog
            </Link>
          </div>
          <div className="w-32 flex items-center justify-end px-2">
            <div className="mt-2">
              <CartToggle />
            </div>
          </div>
        </div>
        <div className="header-triangle"></div>
        <Link href="/" className="header-logo">
          <Image
            src="/images/logo-transparent-bg-square.png"
            alt="Logo"
            width={64 + 16}
            height={64 + 16}
            className="header-logo-image"
          />
        </Link>
        <div className="header-logotype">
          <div>Via</div>
          <div>Bellum</div>
        </div>
      </div>
      <div
        className="fixed top-0 text-primary transition-all duration-300 z-10"
        style={{
          visibility: scroll < 48 ? 'hidden' : 'visible',
          opacity: scroll > 48 ? 1 : 0,
          left: isMenuOpen ? 128 + 64 : 0,
        }}
      >
        <div className="header-left-triangle" />
        <div className="mt-3 ml-2">
          <button
            type="button"
            className={`hamburger hamburger--squeeze ${
              isMenuOpen ? 'is-active' : ''
            }`}
            onClick={() => setIsMenuOpen((x) => !x)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      {!isCartOpen && (
        <div
          className="fixed top-0 right-0 text-primary transition-all duration-300 z-10 flex justify-end"
          style={{
            visibility: scroll < 48 ? 'hidden' : 'visible',
            opacity: scroll > 48 ? 1 : 0,
          }}
        >
          <div className="header-right-triangle" />
          <div className="mt-1.5 mr-2">
            <CartToggle />
          </div>
        </div>
      )}
    </header>
  );
}

// {/* <div
//     className={`fixed z-20 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
//       isMobileNavOpen ? '' : 'bg-opacity-95'
//     }`}
//   >
//     <div
//       className="h-full flex lg:flex-col place-content-between"
//       style={{
//         paddingRight: isCartOpen ? scrollbarWidth : 0,
//       }}
//     >
//       <div className="text-center w-full flex justify-between items-center">
//         <CountrySelector />
//         <MobileNavigation
//           collections={collections}
//           isOpen={isMobileNavOpen}
//           setIsOpen={setIsMobileNavOpen}
//         />
//         <Link
//           className="font-black uppercase text-3xl tracking-widest"
//           to="/"
//         >
//           {storeName}
//         </Link>
//         <CartToggle
//           handleClick={() => {
//             if (isMobileNavOpen) setIsMobileNavOpen(false);
//           }}
//         />
//       </div>
//       <Navigation collections={collections} storeName={storeName} />
//     </div>
//   </div> */}
