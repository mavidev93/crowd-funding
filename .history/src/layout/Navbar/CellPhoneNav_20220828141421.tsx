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
        <>
      <div key={item.id} className={`${item.classNames} flex items-center justify center` }>

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
      </div>
        <CommonDivider/>
</>
    ));
  };
;

  const items = [...navItemsCenter,...navItemsRight,...navItemsLeft,]

  return (
    <div className = " md:hidden">
        <u className='flex flex-col '>
            {items && createNavList(items)}
        </ul>
    </div>
  )
}

export default CellPhoneNav