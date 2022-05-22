//React
import { nanoid} from '@reduxjs/toolkit'

//Third Party
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

interface navItem {
    name?:string;
    id:string;
    root?:string;
    icon?:JSX.Element
    classNames?:string;
    onClick?:Function;
}

export const navItems:navItem [] =[{
    name:'login',
    id:nanoid(),
    

},
{
    name:'bookmarks',
    id:nanoid(),


},
{
    name:'login',
    id:nanoid(),


},
{
    name:'login',
    id:nanoid(),


},{
    name:'login',
    id:nanoid(),


}


]