//Importaciones e inicializaciones
const router = require("express").Router();
const ship = require("../controllers/ship.controller");

module.exports = app => {
    /***************************/
    /* ENDPOINTS para barcos */
    /***************************/
    // Petición para obtener todos los barcos
    router.get("/data", ship.findAll); 
    /***************************/
    app.use("/ship", router);
};