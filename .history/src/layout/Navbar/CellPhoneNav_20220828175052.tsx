/** @format */
//Reaat
import React, { useRef } from "react";
//Third Party
import { Link } from "react-router-dom";
//App
import {
  navItem,
  navItemsCenter,
  navItemsLeft,
  navItemsRight,
} from "./Navbar.static";
import CommonDivider from "../../components/CommonDivider/CommonDivider";
import "./Navbar.scss";

type Props = {};

const CellPhoneNav = (props: Props) => {
  const hamRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLUListElement>(null);
  //Create JSX
  const createNavList = (navItems: navItem[]) => {
    return navItems.map((item) => (
      <div className={item.classNames}>
        <div className="flex items-center justify-center py-2 ">
          <div key={item.id}>
            {item.root ? (
              <Link to={item.root}  className="hover:text-red">
                {item.name}
                {item.component && item.component}
              </Link>
            ) : (
              <>
                {item.name}
                {item.component}
              </>
            )}{" "}
          </div>
        </div>
        <CommonDivider />
      </div>
    ));
  };
  const items = [...navItemsRight, ...navItemsLeft];

  //Handlers
  const handleHamClick = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.classList.toggle("active");

    navMenuRef?.current?.classList.toggle("active");
  };

  const handleScroll = () => {
    hamRef?.current?.classList.remove("active");

    navMenuRef?.current?.classList.remove("active");
  };

  // window?.onscroll(()=>console.log('scroll'))
  return (
    <div className="fixed w-full bg-white	 md:hidden " onScroll={handleScroll}>
      {createNavList(navItemsCenter)}
      <div className="hamburger" ref={hamRef} onClick={handleHamClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <CommonDivider />

      <ul className="flex flex-col nav-menu " ref={navMenuRef}>
        {items && createNavList(items)}
      </ul>
    </div>
  );
};

export default CellPhoneNav;
