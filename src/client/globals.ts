interface IPlayerStats {
    cash: number;
    bank: number;
}

export default class Globals {
    static token: string;
    static role: string = 'user';
    static playerName: string = '';

    static playerStats: IPlayerStats = {
        cash: 0,
        bank: 0,
    };
}
