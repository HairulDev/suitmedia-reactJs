import * as React from "react";
import iconFb from "../../assets/images/icons/iconFb.png";
import iconTwitter from "../../assets/images/icons/iconTwitter.png";
import iconIg from "../../assets/images/icons/iconIg.png";
import iconYt from "../../assets/images/icons/iconYt.png";
import logo from "../../assets/images/logo.png";
import Button from "../../components/atoms/Button";
import Connect from "../atoms/Connect";
import { menuData } from "../../constants";
import Menu from "../atoms/Menu";

function Footer() {
  return (
    <div className="flex flex-col justify-end items-center px-16 pt-20 pb-10 rounded-[40px_40px_0px_0px] max-md:px-5 bg-[linear-gradient(103deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] mt-8 ">
      <div className="flex flex-col w-full max-w-[1180px] max-md:max-w-full">
        <div className="flex flex-col pb-10 border-b border-solid border-neutral-300 max-md:max-w-full">
          <div className="p-8 rounded-2xl bg-sky-950 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <div className="text-2xl font-bold leading-9 text-white capitalize max-md:mt-10">
                  Register now so you don't miss our programs
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-3 p-3 w-full font-medium bg-white rounded-2xl max-md:flex-wrap max-md:mt-10">
                  <input
                    type="text"
                    placeholder=" Enter your Email"
                    className="flex-1 px-7 py-3.5 text-sm leading-5 bg-white rounded-lg border border-solid border-zinc-400 text-zinc-400 max-md:px-5 max-md:max-w-full"
                  />
                  <Button rounded="rounded-lg"> Subcribe Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:max-w-full">
            <Menu menuItems={menuData} />
            <div className="flex gap-5 justify-between">
              <Connect iconSrc={iconFb} linkUrl="#" />
              <Connect iconSrc={iconTwitter} linkUrl="#" />
              <Connect iconSrc={iconIg} linkUrl="#" />
              <Connect iconSrc={iconYt} linkUrl="#" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 text-sm font-medium leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
          <div>© {new Date().getFullYear()} Monito. All rights reserved.</div>
          <a href="/">
            <img
              loading="lazy"
              src={logo}
              alt="Logo"
              className="w-[115px] h-auto"
            />
          </a>
          <div>Terms of Service Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
