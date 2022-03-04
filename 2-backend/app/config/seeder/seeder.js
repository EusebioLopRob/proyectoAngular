//Importaciones e inicializaciones
const User = require("../../models").user;
const AuxFun = require("../../utils/auxiliary.functions");
const { ObjectId } = require("bson");
//_id del usuario administrador
const AdminId = ObjectId("621a69846bf21f002485cb1c");

//Funcion seeder: se encarga de crear al usuario administrador
async function createUserAdmin(){
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
            let userAdminData = new User({
                _id: AdminId,
                username: "admin",
                password: "admin",
                admin: true
            });
            //Declaramos los mensajes
            let createSuccesMessage = "Usuario administrador creado con éxito";
            let createErrorMessage = "Error al crear el usuario administrador";
            //Realizamos la inserción de datos en la base de datos
            let createUserAdmin = await AuxFun.saveDB(userAdminData,createSuccesMessage,createErrorMessage);
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

//Exportamos la función
module.exports = {
    createUserAdmin,
    AdminId
}