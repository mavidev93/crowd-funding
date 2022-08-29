//Third Party
import {Link} from 'react-router-dom'
//App
import {navItem,navItemsCenter,navItemsLeft,navItemsRight} from './Navbar.static'
import CommonDivider from "../../components/CommonDivider/CommonDivider"
type Props = {}

const CellPhoneNav = (props: Props) => {
  //Create JSX
  const createNavList = (navItems: navItem[]) => {
    return navItems.map((item) => (
      <li key={item.id} className={`${item.classNames} py-2` }>

        {item.root ? (
          <Link to={item.root}>
            {item.name}
            {item.component && item.component}
          </Link>
        ):
          <>
             {item.name}
            {item.component }
          </>
        }{" "}
        <CommonDivider/>
      </li>
    ));
  };
;

  const items = [...navItemsCenter,...navItemsRight,...navItemsLeft,]

  return (
    <div className = " md:hidden">
        <ul className='flex flex-col '>
            {items && createNavList(items)}
        </ul>
    </div>
  )
}

export default CellPhoneNav