import { type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
    //name of component
    as?: T;
    //JSX code
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
    as,
    children,
    ...props
}: ContainerProps<C>) {
    const Component = as || 'div';
    return <Component {...props}>{children}</Component>

};

