export default class Helpers {
    static resourceName: string = 'ordu';

    //eslint-disable-next-line
    static async nuiSend(action: string, data: any = {}) {
        try {
            return fetch(`https://${Helpers.resourceName}/${action}`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.warn('Event emit failed');
        }
    }
}
