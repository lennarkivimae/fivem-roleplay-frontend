import React from 'react';
import {useSelector} from 'react-redux';
import {IRouteReducer} from '../../../reducers/route';

interface IRouteProps {
    to: string;
    current: string;
    children?: React.ReactNode;
}

const Route = (props: IRouteProps): JSX.Element => {
    // const currentRoute: string = useSelector((state: IRouteReducer) => state.route );
    const to: string = props.to;
    const currentRoute: string = props.current;

    return (
        <>
            {
                to === currentRoute &&
                <div className={`route`}>
                    { props.children }
                </div>
            }
        </>
    );
}

export default Route;
