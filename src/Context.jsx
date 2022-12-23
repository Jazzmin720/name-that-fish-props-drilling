import {createContext,useState} from 'react';

export const AppContext = createContext();



export const AppProvider = ({children}) => {
   const [state,setState] = useState("default")
    return(
        <AppContext.Provider value = {{value:state}}>
            
            {children}
        </AppContext.Provider>
    );
}
