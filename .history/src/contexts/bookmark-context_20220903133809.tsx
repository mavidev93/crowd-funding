import {createContext,useContext} from 'react'


type Action = {type:"add"} | {type:"remove"}
type State = Campaign[]
type Dispatch = (action:Action)=>void
const bookmarkContext = createContext<{state:State,dispatch:Dispatch}|undefined>(undefined)

function bookmarkReducer (state:State,action:Action){
    switch (action.type) {
        case  "add":{


        }
        case  'remove':{

        }


    }
}

function useBookmark(){
    const bookmark = useContext(BookmarkContext)
    if(bookmark)
    throw new error ("context must be inside context provider")
}