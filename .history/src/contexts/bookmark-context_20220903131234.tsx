import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"delete"}
type Bookmarks = campaign[]

const bookmarkContext = createContext()

function bookmarkReducer =()