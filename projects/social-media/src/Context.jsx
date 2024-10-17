import { createContext } from "react";

  export const shopContext = createContext()

   const ShopContextProvider = (props) => {

    const message = "I am from shop context"

    const  value = {
      message
    }
    return(
        <shopContext.Provider value={value}>
         {props.children}
        </shopContext.Provider>
    )
   }

     export default ShopContextProvider;