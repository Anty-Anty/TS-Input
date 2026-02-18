import type { ComponentPropsWithoutRef } from "react";

type InputProps = {
    // custom props:
    label: string;
    id: string;
    
}   // build-in props of input
& ComponentPropsWithoutRef<'input'>;

const Input = ({label, id, ...props}: InputProps) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </p>
    )
}

export default Input;