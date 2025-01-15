import { createContext } from "react";
import docs from '../assets/index'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const value = {
        docs, currencySymbol
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider