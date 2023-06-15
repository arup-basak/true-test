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
                <Link href="/services">
                  <span className="text-gray-300 hover:text-white">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white">Contact</span>
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
            <p className="mt-4">123 Main Street, City</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <hr className="border-gray-700 mt-8" />
        <div className="text-center text-sm mt-8">
          <p>&copy; 2023 True Test. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by{' '}
            <Link href="/author">
              <span className="text-gray-300 hover:text-white">Your Name</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer