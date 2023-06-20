export class User{
    username: string;
    password: string;
    login: string;
    ativo: boolean;

    constructor(username: string, password: string, login: string, ativo: boolean){
        this.username = username;
        this.password = password;
        this.login = login;
        this.ativo = ativo;
    }
}