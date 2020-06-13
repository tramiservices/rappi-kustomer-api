export enum Enums{
    SUCCESS = 'Process successfully executed',
    FAIL = 'Error executing the process',
    UNAUTHORIZED = 'Unauthorized',
    FN_GET_USERS = 'SELECT * FROM public."Fn_GetUsers"();',
    FN_GET_USERS_BY_ID = 'SELECT * FROM public."Fn_GetUserById"($1);',
    FN_INSERT_USER = 'SELECT * from public."Fn_CreateUser"($1, $2);',
    FN_UPDATE_USER = 'SELECT * from public."Fn_UpdateUser"($1,$2,$3);',
    ACCESS_TOKEN = 'access-token',
    API_BASE = '/api',
    API_KEY = '/API_KEY',
    SWAGGER_BASE = '/v2/swagger/',
    SERVER_RUNNING = 'Rappi Kustomer server running in port:',
    AUTHENTICATION_FAIL = 'Authentication failed',
    AUTHENTICATION_SUCCESS = 'Successful authentication',
    EMPTY_FIELD = '',
    ISSUER = 'Rappi Kustomer'
}