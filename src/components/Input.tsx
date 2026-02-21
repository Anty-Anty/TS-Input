import {forwardRef} from "react";
import type { ComponentPropsWithoutRef } from "react";

type InputProps = {
    // custom props:
    label: string;
    id: string;
    
}   // build-in props of input
& ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;