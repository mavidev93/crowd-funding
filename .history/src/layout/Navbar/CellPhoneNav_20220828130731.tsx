import {navItem,navItemsCenter,navItemsLeft,navItemsRight} from './Navbar.static'
type Props = {}

const CellPhoneNav = (props: Props) => {
  //Create JSX
  const createNavList = (navItems: navItem[]) => {
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
  return (
    <div>

    </div>
  )
}

export default CellPhoneNav