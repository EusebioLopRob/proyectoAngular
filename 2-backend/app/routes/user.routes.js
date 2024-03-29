//Importaciones e inicializaciones
const router = require("express").Router();
const user = require("../controllers/user.controller")

module.exports = app => {
    /***************************/
    /* ENDPOINTS para usuarios */
    /***************************/
    // Petición para obtener todos los usuarios
    router.get("/data", user.findAll); 
    // Petición para obtener un usuario 
    router.get("/data/:id", user.find);
    // Petición para crear un nuevo usuario
    router.post("/create", user.create);
    // Petición para actualizar datos de un usuario
    router.put("/update/:id", user.update);
    // Petición para eliminar un usuario
    router.delete("/delete/:id", user.deleteOne);
    // Petición para hacer login
    router.post("/login", user.login)
    /***************************/
    app.use("/user", router);
};