const express = require('express')
const cors = require("cors");
const app = express()
const port = 8091
const db = require("./app/models/");
const seeder = require("./app/config/seeder/seeder");

//Declaramos corsOptions y damos valor al exposedHeaders
var corsOptions = {
  exposedHeaders: ['Content-Disposition']
};

/* Configuracion de Express */
app.use(cors(corsOptions));
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ limit: '1024mb', extended: true }));

// Pagina de bienvenida a la API
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la aplicación" });
});

//Rutas de la aplicación
require("./app/routes/user.routes")(app);
require("./app/routes/ship.routes")(app);

// Establecer la conexión a la base de datos
// usando los parámetros de conexión deseados
db.mongoose
  .connect(db.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( async () => {
    console.log("Conectado con la base de datos " + db.dburl);
    seeder.createUserAdmin();
    seeder.generateShipData();
  })
  .catch(err => {
    console.log(err);
    process.exit();
});


app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`)
})