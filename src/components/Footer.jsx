import macBook from "../assets/Images/macbook.png";
import image from "../assets/Images/wallpaper.jpg";

import {
  FaPhone,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,

} from "react-icons/fa";


const Footer = () => {
  return (
    <section className="" style={{ backgroundColor: `#042d89` }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-2xl mx-auto text-white text-center text-4xl font-bold py-9">
            its time to <span className=" text-blue-700">start</span> investing
            <div>on Yourself</div>
          </h1>
          <img src={macBook} alt="" className="rounded-lg w-full" />
        </div>
        <div className=" grid sm:grid-cols-4 grid-cols-1 gap-20 mt-20 mb-10 max-w-6xl mx-auto">
          <div>
            <h1 className="uppercase text-xl  font-bold text-center sm:text-start text-white">
              about
            </h1>
            <br />
            <p className="text-m font-normal text-white">
              Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
            </p>
          </div>
          <div className=" flex flex-col gap-10 grid-cols-subgrid">
            <h1 className="text-white text-center sm:text-start uppercase text-xl font-bold">
              pupolar courses
            </h1>
            <div className="flex items-center gap-2">
              <img src={image} alt="hello" className="h-10 w-[100px]" />
              <div>
                <h1 className=" tet-white text-m font-medium hover:opacity-20 cursor-pointer">
                  online arbitarge master miind 2.0
                </h1>
                <p className="">by hamza khan</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={macBook} alt="hello" className="h-10 w-[100px]" />
              <div>
                <h1 className=" text-white text-m font-medium hover:opacity-20 cursor-pointer">
                  online arbitarge master miind 2.0
                </h1>
                <p className="">by hamza khan</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold uppercase text-center sm:text-start">
              Pages
            </h1>
            <br />
            <ul className=" list-disc text-white text-m">
              <li><a href="">BLOG</a> </li>
              <li><a href="">EZICODING</a></li>
              <li><a href="">INTERNSHIP</a> </li>
              <li><a href="">OUR SERVICES</a></li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold uppercase text-center sm:text-start">
              Contact Us
            </h1>
            <br />
            <ul className=" list-none text-white text-m color-white">
              <li>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</li>
              <li>+923455555396</li>
              <li><a href="">info@ezitech.org</a></li>
            </ul>
          </div>
        </div>
        <div className="py-5 border-t-2 border-white">
          <h1 className="text-center text-white ">
            Copyright © 2024 Ezitech Institute | Design & Develop by 
            <a href=""> <u>Eziline Software House</u></a>
          </h1>
          <div className="flex items-center justify-end text-white gap-5">
            <FaPhone />
            <FaInstagramSquare />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
