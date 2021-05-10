export default class Helpers {
    static resourceName: string = 'ordufivem';

    //eslint-disable-next-line
    static async nuiSend(route: string, data: any = {}) {
        try {
            return fetch(`https://${Helpers.resourceName}/${route}`, {
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
