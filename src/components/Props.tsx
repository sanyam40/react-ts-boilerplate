import React from 'react'

// props interface
interface myButtonProps{
    text:string | number | boolean;
    onClick?:()=>void;
}

const Demo: React.FC<myButtonProps> = (props) => {
    const {text,onClick} = props;
    return (
        <>
        <h2>{props.text}</h2>
        <button onClick={props.onClick}>Click</button>
        </>
    )
}

export default Demo;
