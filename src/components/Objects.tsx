import React, { useState } from "react";

interface book{
    name:string;
    price?:number;
}

const Objects:React.FC=()=>{
    const [value,setValue]=useState<book>({
        name:"React",
        price:100
    })
    return(
        <>
        <h2>Objects</h2>
        <h3>{value.name}</h3>
        <h3>{value.price}</h3>
        <button onClick={() => setValue({ name: 'sanyam', price: 600 })}>Update</button>
        </>        
    );
}

export default Objects;