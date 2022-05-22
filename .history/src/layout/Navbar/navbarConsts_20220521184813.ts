//React
import { nanoid} from '@reduxjs/toolkit'

//Third Party
import  from "@"

interface navItem {
    name?:string;
    id:string;
    root?:string;
    icon?:string;
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