import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"delete"}


const bookmarkContext = createContext()
