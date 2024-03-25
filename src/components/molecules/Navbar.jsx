import * as React from "react";
import logo from "../../assets/images/logo.png";
import iconSearch from "../../assets/images/icons/iconSearch.png";
import profile1 from "../../assets/images/avatar/profile1.png";
import collapIcon from "../../assets/images/collapIcon.png";
import Button from "../atoms/Button";
import Menu from "../atoms/Menu";
import { menuData } from "../../constants";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center px-16 py-7 bg-[linear-gradient(103deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] text-base max-md:px-5">
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="flex gap-5 justify-between my-auto font-bold whitespace-nowrap leading-[150%] text-sky-950 max-md:flex-wrap">
          <a href="/">
            <img
              loading="lazy"
              src={logo}
              alt="Logo"
              className="shrink-0 max-w-full aspect-[2.86] w-[115px]"
            />
          </a>
          <Menu menuItems={menuData} />
        </div>
        <div className="flex gap-3.5 pl-6 font-medium max-md:flex-wrap">
          <div className="flex gap-3 py-3 pr-8 pl-4 text-sm leading-5 bg-white rounded-[46px] text-zinc-400">
            <img
              loading="lazy"
              src={iconSearch}
              alt="iconSearch"
              className="shrink-0 w-5 aspect-square"
            />
            <input
              type="text"
              placeholder="Search something here!"
              className="w-full outline-none"
            />
          </div>
          <Button rounded="rounded-[57px]">Join the community</Button>
          <div className="flex gap-1 px-2 pt-2.5 pb-2 whitespace-nowrap leading-[144%] text-sky-950">
            <div className="relative">
              <div className="flex gap-1.5 self-start">
                <img
                  loading="lazy"
                  src={profile1}
                  className="shrink-0 self-start aspect-square w-[21px]"
                />
                <div>VND</div>
                <img
                  loading="lazy"
                  src={collapIcon}
                  className="shrink-0 w-6 aspect-square"
                  onClick={toggleMenu}
                />
                {isOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-1 w-40">
                    <ul className="py-1">
                      <li className="px-4 py-2">Menu Item 1</li>
                      <li className="px-4 py-2">Menu Item 2</li>
                      <li className="px-4 py-2">Menu Item 3</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
