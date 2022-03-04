import { Injectable } from '@angular/core';
import axios from 'axios';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable()
export class AdminService {
    constructor() { }
    private BasePath: string = "http://localhost:8091/user";

    isUserAdmin(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let id = sessionStorage.getItem('idUser');
            axios.get(`${this.BasePath}/data/${id}`).then((response) => {
                let datosRespuesta = response.data;
                resolve(datosRespuesta.data.admin);
            }).catch((err) => {
                reject(false);
            });
        });
    }

}