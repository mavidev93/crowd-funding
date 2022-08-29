//Third Party
import {Link} from 'react-router-dom'
//App
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

  const items = [...navItemsCenter,...navItemsRight,...navItemsLeft,]

  return (
    <div>
        {items?items.map(iten=>)}
    </div>
  )
}

export default CellPhoneNav