import { PayloadAction } from '@reduxjs/toolkit';

export interface IRouteReducer {
    route: string;
}

const route = (state: string = '/', action: PayloadAction<string>): string => {
    switch (action.type) {
        case 'SET_ROUTE':
            return action.payload;
    }

    return state;
}

export default route;
