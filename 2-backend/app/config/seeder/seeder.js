//Importaciones e inicializaciones
const User = require("../../models").user;
const Ship = require("../../models").ship;
const AuxFun = require("../../utils/auxiliary.functions");
//_id del usuario administrador
const AdminId = require("../constants/seeder.data").AdminId;
//Usuario administrador
var adminData = require("../constants/seeder.data").UserAdminData;
//Datos de barcos
const ShipDataList = require("../constants/seeder.data").ShipData;
//módulo bcrypt
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 12;

//Funcion seeder: se encarga de crear al usuario administrador
async function createUserAdmin(){
    //Primero buscamos si existe el usuario administrador
    try{
        //Declaramos los mensajes
        let findSuccesMessage = "Usuario administrador encontrado";
        let notFoundMessage = "No se encuentra usuario administrador";
        let findErrorMessage = "Error al buscar el usuario administrador";
        //Realizamos búsqueda del usuario administrador
        let buscaAdmin = await AuxFun.findOneDB(User,{_id: AdminId},'',findSuccesMessage,findErrorMessage);
        if(buscaAdmin.success && !buscaAdmin.data){
            //Si no encontramos datos creamos al usuario administrador (base de datos vacía)
            console.log(notFoundMessage);
            //Declaramos los mensajes
            let createSuccesMessage = "Usuario administrador creado con éxito";
            let createErrorMessage = "Error al crear el usuario administrador";
            //Encriptamos la contraseña del administrador
            adminData.password = await bcrypt.hash(adminData.password, BCRYPT_SALT_ROUNDS);
            //Creamos la instancia de User
            let administrador = new User({
                _id: adminData.id,
                username: adminData.username,
                password: adminData.password,
                admin: adminData.admin,
                nombre: adminData.nombre,
                apellido: adminData.apellido,
                nif: adminData.nif,
                email: adminData.email
            });
            //Realizamos la inserción de datos en la base de datos
            let createUserAdmin = await AuxFun.saveDB(administrador,createSuccesMessage,createErrorMessage);
            console.log(createUserAdmin.message);
        } else{
            //Si encontramos datos o nos da un error mostramos mensaje
            console.log(buscaAdmin.message);
        }   
    }catch(err){
        //Si se otro error desconocido mostramos mensaje (depuración)
        console.log("Error al crear el usuario administrador: "+err);
    }
}

//Funcion seeder: se encarga de llenar la base de datos si está vacía
async function generateShipData(){
    //Primero buscamos si existe algún registro en la colección ship
    try{
        //Declaramos los mensajes
        let findSuccesMessage = "La base de datos contiene registros de barcos";
        let notFoundMessage = "No se encuentra ningún registro de barco";
        let findErrorMessage = "Error al buscar barcos";
        //Realizamos búsqueda del usuario administrador
        let buscaBarco = await AuxFun.findOneDB(Ship,{},'',findSuccesMessage,findErrorMessage);
        if(buscaBarco.success && !buscaBarco.data){
            //Si no encontramos datos generamos uno por uno los barcos del seeder
            console.log(notFoundMessage);
            ShipDataList.forEach(async shipElement => {
                //Declaramos los mensajes
                let createSuccesMessage = `Registro de barco ${ShipDataList.indexOf(shipElement)} generado con éxito`;
                let createErrorMessage = "Error al generar registro de barco";
                //Realizamos la inserción de datos en la base de datos
                let createBarco = await AuxFun.saveDB(shipElement,createSuccesMessage,createErrorMessage);
                console.log(createBarco.message);
            });
        } else{
            //Si encontramos datos o nos da un error mostramos mensaje
            console.log(buscaBarco.message);
        }   
    }catch(err){
        //Si se otro error desconocido mostramos mensaje (depuración)
        console.log("Error al generar los documentos de barcos: "+err);
    }
}

//Exportamos la función
module.exports = {
    createUserAdmin,
    generateShipData
}