import React,{createContext} from "react";

interface CounterProviderProps{
    children:React.ReactNode;
}

interface CounterContextValue{
    value:number;
    setCount:(num:number)=>void
}

const Context = createContext<CounterContextValue | null>(null);

export const Counter:React.FC=()=>{
    const [count,setCount]=React.useState<number>(0);

    return(
        <Context.Provider value={{
            value:count,
            setCount
        }}>

        </Context.Provider>    
    );
}
