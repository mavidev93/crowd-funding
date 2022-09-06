import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"remove"}
type State = Campaign[]
type Dispatch = (action:Action)=>void
const bookmarkContext = createContext<{state:State,dispatch:Dispatch}>(undefined)

function bookmarkReducer (state:State,action:Action){
    switch  {

    }
    case action.type === "add":{

    }
    case action.type === 'remove':{

    }
}