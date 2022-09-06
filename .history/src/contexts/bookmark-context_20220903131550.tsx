import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"delete"}
type State = Campaign[]
type Dispatch = (action:Action)=>void
const bookmarkContext = createContext<{state:State,dispatch:Dispatch}>(undefined)

function bookmarkReducer (state:State,action:Action){
    
}