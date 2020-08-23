const apiPath = 'http://localhost:8000';
export const ApiRoute = {
    
    login: apiPath + '/apiee/login_check',

    client: {
        all: apiPath + '/apiee/clients',
        one: apiPath + '',
    },
    user: {
        one: apiPath + '/apiee/utilisateur'
    },
    list: {

    },
    
}