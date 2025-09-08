import Image from '../common/Image';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import InformationItem from './InfomationItem';

const Footer = () => {
  return (
    <div className="mt-10 w-full h-200 lg:h-100 bg-tertiary-black">
      <div className="container">
        <div className="py-20 flex flex-col items-start">
          <div>
            <Image
              src="https://ucarecdn.com/15cd9ab3-c422-4a15-8dfe-4dae05794b87/Oasis.png"
              alt="logo"
            />
          </div>
          <div className="w-full lg:grid lg:grid-cols-7">
            <ul className="flex flex-wrap text-sm text-white font-semibold mt-10 w-1/2 lg:w-fit lg:h-full lg:items-end lg:col-span-2 lg:mt-0">
              <li className="after:content-['/'] after:mx-3 after:font-light">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="after:content-['/'] after:mx-3 after:font-light">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="after:content-['/'] after:mx-3 after:font-light">
                <a href="#" className="hover:underline">
                  Sale
                </a>
              </li>
              <li className="after:content-['/'] after:mx-3 after:font-light">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
            <div className="lg:grid lg:col-span-4 lg:grid-cols-2 w-auto lg:ml-4">
              <InformationItem
                title="Contact Us"
                information="+1 999 888-76-54"
                className="text-xl"
              />
              <InformationItem
                title="Email"
                information="hello@logoipsum.com"
                className="text-xm font-light"
              />
              <InformationItem
                title="ADDRESS"
                information="2118 Thornridge Cir. Syracuse, Connecticut 35624"
                className="text-sm text-left font-light"
              />
              <InformationItem
                title="OPENING HOURS"
                information="9am—6pm"
                className="text-xl text-left font-light"
              />
            </div>
            <div className="flex w-full flex-col items-end lg:justify-between">
              <Button
                className="w-14 h-14 mt-10 lg:mt-0 rounded-full bg-background-primary text-black hover:bg-gray-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                <ArrowUp className="size-6" />
              </Button>
              <p className="text-sm text-white font-light mt-14 opacity-50">
                © 2025 — Copyright
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
