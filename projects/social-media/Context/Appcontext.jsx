import { createContext } from "react";

export const Appcontext = createContext()

const contextprovider=(props)=>{
    
    const phone="+1 123456789"

    return(
        <Appcontext.Provider value={phone}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default contextprovider;

