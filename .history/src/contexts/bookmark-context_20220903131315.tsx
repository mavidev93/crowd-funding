import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"delete"}
type State = campaign[]

const bookmarkContext = createContext<>()

function bookmarkReducer =(state:)