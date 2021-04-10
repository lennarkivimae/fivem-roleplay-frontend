import React, {useState} from 'react';
import __ from '../../translations';

interface IFundsProps {
    bank: number,
    cash: number
    lang?: string;
}

const FundsModule = (props: IFundsProps): JSX.Element => {
    const [cash, setCash] = useState(props.cash);
    const [bank, setBank] = useState(props.bank);

    return (
        <div className="funds">
            <div className="funds__row">
                <p className="funds__title">{ __('cash', props.lang)}</p>
                <p className="funds__amount">{ cash }</p>
            </div>
            <div className="funds__row">
                <p className="funds__title">{ __('bank', props.lang) }</p>
                <p className="funds__amount">{ bank }</p>
            </div>
        </div>
    );
}

export default FundsModule;
