//Importaciones
const AuxFun = require("../utils/auxiliary.functions");
const Ship = require("../models").ship;

/**
 * Esta función devuelve los datos de todos los barcos de la base de datos
 * @param {Object} req Objeto de petición
 * @param {Object} res Objeto de respuesta
 * @returns Respuesta con datos
 */
async function findAll(req,res){
    try{
        //Declaramos los mensajes
        let successMsg = "Datos de barcos encontrados";
        let errMsg = "Error al buscar datos de barcos";
        //Realizamos la búsqueda
        let buscaBarcos = await AuxFun.findDB(Ship,{},successMsg,errMsg);
        if(buscaBarcos.success && !buscaBarcos.data){
            //Si no hay datos devolvemos resuesta acorde
            return res.status(200).send({message: "No hay barcos", data: [], code: 2000})
        } else if(buscaBarcos.success){
            //Si hay datos devolvemos los datos
            return res.status(200).send({message: buscaBarcos.message, data: buscaBarcos.data, code: 2000});
        } else {
            //Si se produce un error el la búsqueda enviamos respuesta de error
            return res.status(500).send({message: buscaBarcos.message, code: 3000});
        }
    }catch(err){
        //Si se produce un error inesperado enviamos respuesta de error (Depuración)
        console.log("Controlador: ship.controller.findAll: "+ err);
        return res.status(500).send({message: "Error desconocido", code: 3000});
    }
}

module.exports = {
    findAll
}