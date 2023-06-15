import React from 'react';
import Link from 'next/link';

const NavBar = ({ cartCount }: { cartCount: number }) => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <div className="text-2xl font-bold text-white">True Test</div>
        </Link>
        <div className="flex space-x-3">
          <Link href="/labs">
            <div className="hover:text-indigo-500 text-white">Labs</div>
          </Link>
          <Link href="/products">
            <div className="hover:text-indigo-500 text-white">Products</div>
          </Link>
          <Link href="/about">
            <div className="hover:text-indigo-500 text-white">About</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="tel:+919732919663">
            <div className="px-4 py-2 bg-purple-800 rounded text-white">Call Now</div>
          </Link>
          <Link href="/cart">
            <div className="px-4 py-2 bg-purple-800 rounded text-white">
              {cartCount === 0 ? 'Cart' : `Cart ${cartCount}`}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
