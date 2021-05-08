import React, {useState} from 'react';
import __ from '../../translate';
import {ILangReducer} from '../../../reducers/lang';
import {useSelector} from 'react-redux';

interface IFundsProps {
    bank: number,
    cash: number
}

const Funds = (props: IFundsProps): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );
    const [cash] = useState(props.cash);
    const [bank] = useState(props.bank);

    return (
        <div className="funds">
            <div className="funds__row">
                <p className="funds__title">{ __('cash', lang)}</p>
                <p className="funds__amount">{ cash }</p>
            </div>
            <div className="funds__row">
                <p className="funds__title">{ __('bank', lang) }</p>
                <p className="funds__amount">{ bank }</p>
            </div>
        </div>
    );
}

export default Funds;
