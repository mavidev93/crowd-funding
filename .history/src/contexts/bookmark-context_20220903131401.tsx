import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"delete"}
type State = Campaign[]
type
const bookmarkContext = createContext<{state:State,dispatch:Dispatch}>()

function bookmarkReducer =(state:)