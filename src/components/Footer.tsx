import Link from 'next/link';
import SocialMediaIcons from './SocialMediaIcons';
import facebook_icon from 'public/facebook.svg'

const Footer = () => {
  return (
    <footer className="bg-[#f4f1de] text-black">
      <div className="tablet:container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 tablet:grid-cols-4 gap-8">
          <div className="col-span-2 tablet:col-span-1">
            <h3 className="text-xl font-bold">TrueTest</h3>
            <p className="mt-4 text-justify">
              TrueTest ensures unparalleled accuracy in our diagnostic results, allowing you to be more confident in your healthcare decisions. Experience the assurance of advanced technology and expert technicians in our state-of-the-art facilities.
            </p>
          </div>
          <div className="col-span-2 tablet:col-span-1">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li>
                <Link href="/">
                  <span className="hover:text-gray-700">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-gray-700">About</span>
                </Link>
              </li>
              <li>
                <Link href="/labs">
                  <span className="hover:text-gray-700">Labs</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-gray-700">Products</span>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer