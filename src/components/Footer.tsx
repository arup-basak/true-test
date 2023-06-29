import Link from 'next/link';
import SocialMediaIcons from './SocialMediaIcons';
import facebook_icon from 'public/facebook.svg'

const Footer = () => {
  return (
    <footer className="bg-[#08223a] text-gray-300">
      <div className="tablet:container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 tablet:grid-cols-4 gap-8">
          <div className="col-span-2 tablet:col-span-1">
            <h3 className="text-xl font-bold">TrueTest</h3>
            <p className="mt-4">
              Empowering Health through Advanced Diagnostics. Uncover the Truth. Discover Wellness. Trust our State-of-the-Art Diagnostic Center for Comprehensive and Precise Medical Evaluations, Guiding Your Path to Optimal Health.
            </p>
          </div>
          <div className="col-span-2 tablet:col-span-1">
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
          <div className="col-span-2 tablet:col-span-1">
            <h3 className="text-xl font-bold">Social Media</h3>
            <ul className="mt-4 flex space-x-4">
              {/* <SocialMediaIcons src={facebook_icon} /> */}
            </ul>
          </div>
          <div className="col-span-2 tablet:col-span-1">
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