export class Usuario {
    public id: string;
    public username: string;
    public password: string;
    public admin: boolean;

    constructor(id: string, username: string, password: string, admin: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.admin = admin;
    }
}