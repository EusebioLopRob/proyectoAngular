/**
 * Guardar datos en la base de datos  
 * @param dataSchema Esquema de datos vinculado al modelo de datos
 * @param {String} succesMessage Mensaje de exito que se le quiere mostrar al usuario
 * @param {String} errMessage Mensaje de error para mostrarle la usuario
 * @returns 
 */
function saveDB(dataSchema, succesMessage, errMessage) {
  return new Promise(function (resolve, reject) {
    let res = {
      data: null,
      success: null,
      message: null,
      code: 500
    }
    dataSchema.save()
      .then(data => {
        res.data = data
        res.success = true
        res.message = succesMessage
        res.code = 200
        resolve(res)
      })
      .catch(err => {
        console.log("error guardar");
        res.data = err
        res.success = false
        res.code = err.code
        res.message = errMessage
        reject(res)
      })
  });
}

/**********************************************************/
/* FUNC: Buscar datos en la base de datos  
   @dataModel: Modelo de datos que se va a tratar
   @searchParams: Parámetros para la busqueda selectiva de datos
                  Usar null para recuperar de todos los registros (findAll)
   @successMessage: Mensaje de exito que se le quiere mostrar al usuario
   @errMessage: Mensaje de error para mostrarle la usuario
*/
/*******************************************************/
function findDB(dataModel, searchParams, succesMessage, errMessage) { 
  return new Promise(function (resolve, reject) {
    let res = {
      data: null,
      success: null,
      message: null,
      code: 500
    }
    dataModel.find(searchParams)
      .then(data => {
        res.data = data
        res.success = true
        res.message = succesMessage
        res.code = 200
        resolve(res)
      })
      .catch(err => {
        console.log("error buscar todos");
        res.data = err
        res.message = errMessage
        res.success = false
        res.code = 500
        reject(res)
      })
  });
}

/**********************************************************/
/* FUNC: Busca el primer resultado que cumpla el parámetro de búsqueda en la base de datos  
   @dataModel: Modelo de datos que se va a tratar
   @searchParams: Parámetros para la busqueda selectiva de datos
                  Usar null para recuperar de todos los registros (findAll)
   @populations: Poblar colecciones que están referenciadas a otros modelos de datos vinculados
                 Se pueden poblar varias haciendo 'col1 col2 col3'
   @successMessage: Mensaje de exito que se le quiere mostrar al usuario
   @errMessage: Mensaje de error para mostrarle la usuario
*/
/*******************************************************/
function findOneDB(dataModel, searchParams, populations, succesMessage, errMessage) {
  return new Promise(function (resolve, reject) {
    let res = {
      data: null,
      success: null,
      message: null,
      code: 500
    }
    dataModel.findOne(searchParams)
      .populate(populations)
      .then(data => {
        res.data = data
        res.success = true
        res.message = succesMessage
        res.code = 200
        resolve(res)
      })
      .catch(err => {
        console.log("error buscar");
        res.data = err
        res.message = errMessage
        res.success = false
        res.code = 500
        reject(res)
      })
  });
}


/****************************************/
/* FUNC: Borrar la primera entrada de la base de datos que cumpla el parámetro de borrado
   @dataModel: Modelo de datos que se va a tratar
   @deleteParams: Parámetros para el borrado selectivo de datos 
                  Usar null para borrar todos los datos
   @successMessage: Mensaje de exito que se le quiere mostrar al usuario
   @errMessage: Mensaje de error para mostrarle la usuario
*/
/**************************************/
function delOneDB(dataModel, deleteParams, succesMessage, errMessage) {
  return new Promise(function (resolve, reject) {
    let res = {
      data: null,
      success: null,
      message: null,
      code: 500
    }
    dataModel.deleteOne(deleteParams)
      .then(data => {
        res.data = data
        res.success = true
        res.message = succesMessage
        res.code = 200
        resolve(res)
      })
      .catch(err => {
        console.log("error eliminar");
        res.data = err
        res.message = errMessage
        res.success = false
        res.code = 500
        reject(res)
      })
  });
}


/****************************************/
/* FUNC: Actualiza el campo indicado de UN documento de la colleción indicada
   @dataModel: Modelo de datos que se va a tratar, coleccion a actualizar.
   @targetID: ID del documento que se quiere actualizar.
   @targetField: nuevo valor para el campo del documento.
   @successMessage: Mensaje de exito que se le quiere mostrar al usuario
   @errMessage: Mensaje de error para mostrarle la usuario
*/
/**************************************/
function updateOneDB(dataModel, targetID, targetField, succesMessage, errMessage) {
  
  return new Promise(function (resolve, reject) {
    let res = {
      data: null,
      success: null,
      message: null,
      code: 500
    }
    dataModel.findOneAndUpdate(targetID, targetField, { returnDocument: "after" })
      .then(data => {
        res.data = data
        res.success = true
        res.message = succesMessage
        res.code = 200
        resolve(res)
      })
      .catch(err => {
        console.log("error actualizar");
        res.data = err
        res.message = errMessage
        res.success = false
        res.code = 500
        reject(res)
      })
  });
}

//Exportamos la función
module.exports = {
  saveDB,
  findDB,
  findOneDB,
  delOneDB,
  updateOneDB,
}