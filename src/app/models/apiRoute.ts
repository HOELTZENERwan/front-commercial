const apiPath = 'https://e3manager.com';


export const ApiRoute = {
    
    login: apiPath + '/apiee/login_check',

    client: {
        all: apiPath + '/apiee/clients',
        one: apiPath + '',
    },
    user: {
        one: apiPath + '/apiee/utilisateurs'
    },
    trajet: {
        all: apiPath + '/apiee/trajets'
    },
    frais: {
        all: apiPath + '/apiee/frais'
    }
    
}