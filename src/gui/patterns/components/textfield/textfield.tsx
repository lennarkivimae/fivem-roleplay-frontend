import React from 'react';

interface ITextfieldProps {
    class: string,
    modifier: string,
    type: string
    onChange?: ((event: React.FormEvent<HTMLInputElement>) => void)
}

const Textfield = (props: ITextfieldProps): JSX.Element => {
    return (
        <input onChange={props.onChange} className={ `textfield ${props.class} ${props.modifier}` } type={`${props.type}`} />
    );
}

export default Textfield;

