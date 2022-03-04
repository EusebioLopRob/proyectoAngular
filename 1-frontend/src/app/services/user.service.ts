import { Injectable } from '@angular/core';
import axios from 'axios';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable()
export class UserService {
    constructor() { }
    private BasePath: string = "http://localhost:8091/user";
    getAllUsers() {
        return axios.get(`${this.BasePath}/data`);
    }
    getUser(id: string|any) {
        return axios.get(`${this.BasePath}/data/${id}`);
    }
    createUser(data: Object) {
        return axios.post(`${this.BasePath}/create`, data)
    }
    updateUser(id: string|any, data: Object) {
        return axios.put(`${this.BasePath}/update/${id}`, data)
    }
    deleteUser(id: string|any) {
        return axios.delete(`${this.BasePath}/delete/${id}`);
    }
    login(data: Object){
        return axios.post(`${this.BasePath}/login`, data);
    }
}