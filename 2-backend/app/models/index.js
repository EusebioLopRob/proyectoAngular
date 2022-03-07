//Importaciones e inicializaciones
const dbConfig = require("../config/config.js");
const mongoose = require("mongoose");

const db = {
    mongoose: mongoose,
    dburl: dbConfig.dburl,

    /******************************/
    // ÍNDICE DE MODELOS DE DATOS //
    /******************************/
    user: require("./users/user.model")(mongoose),
    ship: require("./ships/ship.model")(mongoose)
};

//Exportaciones
module.exports = db;