import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ShipService {
    constructor() { }
    private BasePath: string = "http://localhost:8091/ship";
    getAllShips() {
        return axios.get(`${this.BasePath}/data`);
    }
}