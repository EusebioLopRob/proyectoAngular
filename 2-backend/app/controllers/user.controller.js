//Importaciones
const AuxFun = require("../utils/auxiliary.functions");
const User = require("../models").user;

/**
 * Esta función devuelve los datos de todos los usuarios de la base de datos
 * @param {Object} req Objeto de petición
 * @param {Object} res Objeto de respuesta
 * @returns Respuesta con datos
 */
async function findAll(req,res){
    try{
        //Declaramos los mensajes
        let successMsg = "Datos de usuarios encontrados";
        let errMsg = "Error al buscar datos de usuarios";
        //Realizamos la búsqueda
        let buscaUsuarios = await AuxFun.findDB(User,{},successMsg,errMsg);
        if(buscaUsuarios.success && !buscaUsuarios.data){
            //Si no hay datos devolvemos resuesta acorde
            return res.status(200).send({message: "No hay usuarios", data: [], code: 2000})
        } else if(buscaUsuarios.success){
            //Si hay datos devolvemos los datos
            return res.status(200).send({message: buscaUsuarios.message, data: buscaUsuarios.data, code: 2000});
        } else {
            //Si se produce un error el la búsqueda enviamos respuesta de error
            return res.status(500).send({message: buscaUsuarios.message, code: 3000});
        }
    }catch(err){
        //Si se produce un error inesperado enviamos respuesta de error (Depuración)
        console.log("Controlador: user.controller.findAll: "+ err);
        return res.status(500).send({message: "Error desconocido", code: 3000});
    }
}

/**
 * Esta función devuelve los datos de un usuario de la base de datos
 * @param {Object} req Objeto de petición el id solicitado viene en req.params.id
 * @param {Object} res Objeto de respuesta
 * @returns Respuesta con datos
 */
async function find(req,res){
    try{
        //Recogemos el id de la petición
        let id = req.params.id;
        //Declaramos los mensajes
        let successMsg = "Datos del usuario encontrados";
        let errMsg = "Error al buscar datos del usuario";
        //Realizamos la búsqueda
        let buscaUsuario = await AuxFun.findOneDB(User,{_id: id},'',successMsg,errMsg);
        if(buscaUsuario.success && !buscaUsuario.data){
            //Si no hay datos devolvemos resuesta acorde
            return res.status(200).send({message: "No existe el usuario solicitado", data: [], code: 2000})
        } else if(buscaUsuario.success){
            //Si hay datos devolvemos los datos
            return res.status(200).send({message: buscaUsuario.message, data: buscaUsuario.data, code: 2000});
        } else {
            //Si se produce un error el la búsqueda enviamos respuesta de error
            return res.status(500).send({message: buscaUsuario.message, code: 3000});
        }
    }catch(err){
        //Si se produce un error inesperado enviamos respuesta de error (Depuración)
        console.log("Controlador: user.controller.find: "+ err);
        return res.status(500).send({message: "Error desconocido", code: 3000});
    }
}

/**
 * Esta función crea un nuevo usuario en la base de datos
 * @param {Object} req Objeto de petición los datos del nuevo usuario viene en req.body.data
 * @param {Object} res Objeto de respuesta
 * @returns Respuesta con datos
 */
async function create(req,res){
    try{
        //Recogemos los datos de la petición
        let userdata = req.body;
        //Declaramos los mensajes
        let successMsg = "Usuario creado con éxito";
        let errMsg = "Error al crear usuario";
        //creamos la estructura para guardar los datos
        let dataSchema = new User({
            username: userdata.username,
            password: userdata.password
        });
        //Realizamos la búsqueda
        let creaUsuario = await AuxFun.saveDB(dataSchema,successMsg,errMsg)
        if(creaUsuario.success){
            //Si la operación es un éxito enviamos los datos
            return res.status(200).send({message: creaUsuario.message, data: creaUsuario.data, code: 2000});
        } else {
            //Si se produce un error el la creación enviamos respuesta de error
            return res.status(500).send({message: creaUsuario.message, code: 3000});
        }
    }catch(err){
        //Si se produce un error inesperado enviamos respuesta de error (Depuración)
        console.log("Controlador: user.controller.create: "+ err);
        return res.status(500).send({message: "Error desconocido", code: 3000});
    }
}

/**
 * Esta función actualiza los datos de un usuario en la base de datos
 * @param {Object} req Objeto de petición el id solicitado viene en req.params.id, los datos del usuario a actualizar viene en req.body.data
 * @param {Object} res Objeto de respuesta
 * @returns Respuesta con datos
 */
async function update(req,res){
    try{
        //Recogemos el id de la petición
        let id = req.params.id;
        //Declaramos los mensajes
        let findSuccessMsg = "Datos del usuario encontrados";
        let findErrorMsg = "Error al buscar datos del usuario";
        //Realizamos la búsqueda
        let buscaUsuario = await AuxFun.findOneDB(User,{_id: id},'',findSuccessMsg,findErrorMsg);
        if(buscaUsuario.success && !buscaUsuario.data){
            //Si no hay datos devolvemos resuesta acorde
            return res.status(200).send({message: "No existe el usuario solicitado", data: [], code: 2000})
        } else if(buscaUsuario.success){
            /*Si hay datos actualizamos al usuario
            Recogemos los datos de la petición*/
            let userdata = req.body;
            //Declaramos los mensajes
            let updateSuccessMsg = "Usuario actualizado con éxito";
            let updateErrorMsg = "Error al actualizar usuario";
            //creamos la estructura para guardar los datos
            let updateData = {
                username: userdata.username,
                password: userdata.password
            };
            //Realizamos la actualización
            let actualizaUsuario = await AuxFun.updateOneDB(User,{_id: id},updateData,updateSuccessMsg,updateErrorMsg);
            if (actualizaUsuario.success){
                //Si la actualización resulta exitosa devolvemos respuesta
                return res.status(200).send({message: actualizaUsuario.message, data: actualizaUsuario.data, code: 2000});
            }else{
                //Si se produce un error el la actualización enviamos respuesta de error
                return res.status(500).send({message: actualizaUsuario.message, code: 3000});
            }
        } else {
            //Si se produce un error el la búsqueda enviamos respuesta de error
            return res.status(500).send({message: buscaUsuario.message, code: 3000});
        }
    }catch(err){
        //Si se produce un error inesperado enviamos respuesta de error (Depuración)
        console.log("Controlador: user.controller.update: "+ err);
        return res.status(500).send({message: "Error desconocido", code: 3000});
    }
}

/**
 * Esta función elimina un usuario de la base de datos
 * @param {Object} req Objeto de petición el id solicitado viene en req.params.id
 * @param {Object} res Objeto de respuesta
 * @returns Respuesta con datos
 */
async function deleteOne(req,res){
    try{
        //Recogemos el id de la petición
        let id = req.params.id;
        //Declaramos los mensajes
        let findSuccessMsg = "Datos del usuario encontrados";
        let findErrorMsg = "Error al buscar datos del usuario";
        //Realizamos la búsqueda
        let buscaUsuario = await AuxFun.findOneDB(User,{_id: id},'',findSuccessMsg,findErrorMsg);
        if(buscaUsuario.success && !buscaUsuario.data){
            //Si no hay datos devolvemos resuesta acorde
            return res.status(200).send({message: "No existe el usuario solicitado", data: [], code: 2000})
        } else if(buscaUsuario.success){
            //Si hay datos eliminamos al usuario
            //Declaramos los mensajes
            let deleteSuccessMsg = "Usuario eliminado con éxito";
            let deleteErrorMsg = "Error al eliminar usuario";
            //Reaizamos la eliminación
            let eliminaUsuario = await AuxFun.delOneDB(User,{_id: id},deleteSuccessMsg,deleteErrorMsg);
            if (eliminaUsuario.success){
                //Si la eliminación resulta exitosa devolvemos respuesta
                return res.status(200).send({message: eliminaUsuario.message, data: buscaUsuario.data, code: 2000});
            }else{
                //Si se produce un error el la eliminación enviamos respuesta de error
                return res.status(500).send({message: eliminaUsuario.message, code: 3000});
            }
        } else {
            //Si se produce un error el la búsqueda enviamos respuesta de error
            return res.status(500).send({message: buscaUsuario.message, code: 3000});
        }
    }catch(err){
        //Si se produce un error inesperado enviamos respuesta de error (Depuración)
        console.log("Controlador: user.controller.deleteOne: "+ err);
        return res.status(500).send({message: "Error desconocido", code: 3000});
    }  
}

//Exportamos las funciones de los endpoints
module.exports = {
    findAll,
    find,
    create,
    update,
    deleteOne
}