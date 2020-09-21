const apiPath = 'https://e3manager.com';


export const ApiRoute = {
    
    login: apiPath + '/apiee/login_check',

    client: {
        all: apiPath + '/apiee/clients',
        one: apiPath + '',
        new: apiPath + '/apiee/clients/create',
    },
    user: {
        one: apiPath + '/apiee/utilisateurs'
    },
    trajet: {
        all: apiPath + '/apiee/trajets',
        new: apiPath + '/apiee/trajets/create',
    },
    frais: {
        all: apiPath + '/apiee/frais'
    }
    
}