import React, { useState } from "react";

const Form: React.FC = () => {

    const [value,SetValue]=useState<string | undefined>("");

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        SetValue(event.target.value);
    }
    return (
        <>
            <input type="text" placeholder="enter name" onChange={handleChange}/>
        </>
    );
}

export default Form;
