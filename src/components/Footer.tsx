import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">TrueTest</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor eros eu efficitur convallis.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white">About</span>
                </Link>
              </li>
              <li>
                <Link href="/labs">
                  <span className="text-gray-300 hover:text-white">Labs</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-300 hover:text-white">Products</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">Social Media</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <span className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div>True Test Diagnostic 128/25. Hazra Road</div>
            <div>(Near Hazra Crossing)Jatin Das Metro Station,</div>
            <div>Kolkata - 700026</div>
          </div>
        </div>
        <hr className="border-gray-700 mt-8" />
        <div className="text-center text-sm mt-8">
          <p>Copyright © 2023, True Test Diagnostics., All Rights Reserved Powered By: ARUP BASAK</p>
          <p className="mt-2">
            Designed and developed by{' '}
            <Link href="/author">
              <span className="text-gray-300 hover:text-white">ARUP BASAK</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer