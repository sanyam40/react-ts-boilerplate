import React,{useState} from "react";

const HookDemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    return (
    <div>
        HookDemo {count}
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>);
}

export default HookDemo;