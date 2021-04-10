import Helpers from "../helpers/helpers";

interface IFundsPayload {
    action: string,
    cash: number,
    bank: number
}

export default class Gui{
    static update(action: string, payload: IFundsPayload): void {
        if (action === 'funds') {
            Helpers.sendNui('funds', payload);
        }
    }
}
