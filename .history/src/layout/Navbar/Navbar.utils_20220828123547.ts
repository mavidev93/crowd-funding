
import {navItem}from "./navbarConsts"
export const createNavList = (navItems: navItem[]) => {
    return navItems.map((item) => (
      <li key={item.id} className={item.classNames}>
        {item.root && (
          <Link to={item.root}>
            {item.name}
            {item.component && item.component}
          </Link>
        )}{" "}
      </li>
    ));
  };