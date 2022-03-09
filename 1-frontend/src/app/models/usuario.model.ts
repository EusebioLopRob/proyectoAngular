export class Usuario {
    public id: string;
    public username: string;
    public password: string;
    public admin: boolean|string;
    public nombre: string;
    public apellido: string
    public nif: string;
    public email: string

    constructor(id: string, username: string, password: string, admin: boolean|string, nombre: string, apellido: string, nif: string, email: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.admin = admin;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nif=nif;
        this.email=email;
    }
}