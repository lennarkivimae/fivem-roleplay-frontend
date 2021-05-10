import React from 'react';

interface ISelectProps {
    class: string;
    name: string;
    options: ISelectOptions[];
    value?: string;
    label?: string;
    modifier?: string;
    onChange?: ((event: React.FormEvent<HTMLSelectElement>) => void);
}

interface ISelectOptions {
    value: string;
    display_name: string;
    default?: boolean;
}

const Select = (props: ISelectProps): JSX.Element => {
    return (
        <>
            {
                props.label &&
                <label className={'label select__label'}>{ props.label }</label>
            }
            <select name={props.name} className="textfield select" onChange={props.onChange} value={props.value}>
                {
                    props.options.map((option, index) => {
                        return (
                            <option key={`${props.name}-select-${index}`} className={'select__option'} value={option.value}>{ option.display_name} </option>
                        )
                    })
                }
            </select>
        </>
    );
}

export default Select;
