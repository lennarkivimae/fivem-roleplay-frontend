import React, {ReactNode} from 'react';

interface ITextareaProps {
    class: string;
    modifier?: string;
    children?: ReactNode;
    placeholder?: string;
}

const Textarea = (props: ITextareaProps): JSX.Element => {
    return (
        <textarea className={`textfield textarea ${props.class} ${props.modifier}`} placeholder={props.placeholder}>{ props.children }</textarea>
    );
}

export default Textarea;
