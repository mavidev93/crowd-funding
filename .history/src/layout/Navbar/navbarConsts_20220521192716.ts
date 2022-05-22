//React
import { nanoid} from '@reduxjs/toolkit'

//Third Party
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ReactNode } from 'react';

interface navItem {
    name?:string;
    id:string;
    root?:string;
    icon?:R
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