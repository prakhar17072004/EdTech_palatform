import React from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterLink2 } from "../../data/footer-links";
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forum", "Chapters", "Events"];
const BottomFooter = ["PrivacyPolicy", "Cookie", "Terms"];
function Footer() {
  return (
    <div className="bg-richblack-800">
      <div
        className="flex lg:flex-row gap-8 items-center 
      justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14"
      >
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* section 1*/}
          <div
            className="lg:w-[50%] flex flex-wrap flex-row
           justify-between lg:border-r lg:border-richblack-700
            pl-3 lg:pr-5 gap-3"
          >
            {/* logo and campany section */}
            <div
              className="flex flex-col w-[30%] gap-3 lg:w-[30%] 
            mb-10 lg:pl-0 "
            >
              <img src={Logo} alt="Logo" className="object-contain" />
              <h1 className="text-[16px] font-semibold mt-3 text-richblack-50 ">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                <a href="/signup">
                  <p
                    className="text-[14px] cursor-pointer hover:text-richblack-50 
                   transition-all duration-200 "
                  >
                    Abouts
                  </p>
                </a>
                <a href="/signup">
                  <p
                    className="text-[14px] cursor-pointer hover:text-richblack-50 
                   transition-all duration-200 "
                  >
                    Careers
                  </p>
                </a>
                <a href="/signup">
                  <p
                    className="text-[14px] cursor-pointer hover:text-richblack-50 
                   transition-all duration-200 "
                  >
                    Affilates
                  </p>
                </a>
              </div>
              <div className="flex flex-row gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                {/* add new logo of twitter */}
                <FaYoutube />
              </div>
            </div>

            {/* Resources and support section */}
            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>
              <div className="flex flex-col mt-2 gap-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            {/* Plans and community section */}
            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              {/* Plans */}
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom footer */}
      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, index) => {
              return (
                <div
                  key={index}
                  className=" gap-4 items-center justify-evenly border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            Made with ❤️ by Prakhar Mishsra © 2024 StudyNotion
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
