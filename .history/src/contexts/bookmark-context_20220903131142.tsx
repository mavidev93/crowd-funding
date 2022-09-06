import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"delete"}
type bookmarks = campaign[]

const bookmarkContext = createContext()
