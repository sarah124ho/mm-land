export interface AuthorizationDTO {
    token: string;
    refresh: string;
    expire: string;
    centrifuge: string;
}

export const InitialAuthorization: AuthorizationDTO = {
    token: '',
    refresh: '',
    expire: '',
    centrifuge: ''
}