export class Usuario {
    public id: string;
    public username: string;
    public password: string;
    public admin: boolean|string;

    constructor(id: string, username: string, password: string, admin: boolean|string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.admin = admin;
    }
}