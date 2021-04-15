import { PayloadAction } from '@reduxjs/toolkit';

export interface ILangReducer {
    lang: string;
}

const lang = (state: string = 'en', action: PayloadAction<string>): string => {
    switch (action.type) {
        case 'SET_LANG':
            return action.payload;
    }

    return state;
}

export default lang;
