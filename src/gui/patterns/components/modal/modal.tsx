import React, {useState} from 'react';
import Icon from '../icon/icon';

interface IModalProps {
    class: string,
    modifier: string
    data: IModalData
}

export interface IModalData {
    title?: string,
    text?: string,
    notificationTheme?: string,
    icon?: string,
    stateClass?: string
}

const Modal = (props: IModalProps): JSX.Element => {
    const [showModal, setShowModal] = useState(props.data.stateClass);

    return (
        <div className={`modal ${showModal ? 'is-visible' : ''} ${props.class} ${props.modifier}`}>
            {
                props.data.icon &&
                <Icon class="modal__icon" modifier="" data={{ name: props.data.icon }} />
            }
            {
                (props.data.title || props.data.text) &&
                <div className="modal__container">
                    {
                        props.data.title &&
                        <h2 className="modal__title">{props.data.title}</h2>
                    }
                    {
                        props.data.text &&
                        <p className="modal__body">{props.data.text}</p>
                    }
                    {
                        props.data.icon &&
                        <Icon class="modal__icon" modifier="" data={{ name: props.data.icon }} />
                    }
                </div>
            }
        </div>
    );
}

export default Modal;
