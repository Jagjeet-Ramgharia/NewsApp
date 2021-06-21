import React ,{ useContext, createContext , useState} from "react";

const ListContext = createContext();
export const useList = () => useContext(ListContext);

export const ListProvider = ({children}) =>{
    const[isList, setIsList] = useState(false);
    const[apiData,setApiData] = useState(null);
    const[showSideBar,setShowSideBar] = useState(false);

    return (
        <ListContext.Provider value={{isList,setIsList,apiData,setApiData,showSideBar,setShowSideBar}}>
        {children}
        </ListContext.Provider>
    )
}
