interface IReturnObject {
    type: string;
    payload: string;
}

export const setLang = (payload: string): IReturnObject  => {
    return {
        type: 'SET_LANG',
        payload: payload
    }
}

export const setRoute = (payload: string): IReturnObject => {
    return {
        type: 'SET_ROUTE',
        payload: payload
    }
}
