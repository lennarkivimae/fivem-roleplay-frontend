import React from 'react';

interface IProps {
    class: string,
    modifier: string,
    action?: string;
    onClick?: ((event: React.MouseEvent) => void)
    children?: React.ReactNode
}

const Button = (props: IProps): JSX.Element => {
    return (
        <button onClick={props.onClick} className={`button ${props.class} ${props.modifier}`} data-action={props.action}>
            { props.children }
        </button>
    );
}

export default Button;
