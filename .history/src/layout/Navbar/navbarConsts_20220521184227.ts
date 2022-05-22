import { nanoid} from '@reduxjs/toolkit'
interface navItem {
    name?:string;
    id:string;
    root?:string;
    icon?:string;
    classNames?:string;
    onClick
}

export const navItems:[navItem] =[{
    name:'login',
    id:nanoid(),

}]