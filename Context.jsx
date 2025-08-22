import { createContext, useContext, useState } from "react";

const counterContext = createContext();

export const CounterProvider = ({children}) => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("owais");

    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => prev - 1);

    return <counterContext.Provider value={{count,increase,decrease,name,setName}}>
        {children}
    </counterContext.Provider>
}
export const useCounter = () => useContext(counterContext);