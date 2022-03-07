//Constantes para generar colecciones
const { ObjectId } = require("bson");
const User = require("../../models").user;
const Ship = require("../../models").ship;

//_id del usuario administrador
const AdminId = ObjectId("621a69846bf21f002485cb1c");

//Usuario administrador
const UserAdminData = new User({
    _id: AdminId,
    username: "admin",
    password: "admin",
    admin: true
});

//Datos de barcos
const ShipData = [
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971ef"),
        src: "iowa.jpg",
        alt: "Acorazado Iowa",
        name: "USS Iowa",
        description: "El glorioso acorazado Iowa, superviviente de la guerra, ostenta el record del tiro certero más lejano de la historia.",
        nation: "USN",
        type: "BB",
        caliber: 16,
        unit: "inch"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f0"),
        src: "yamato.jpg",
        alt: "Acorazado Yamato",
        name: "Yamato",
        description: "Orgullo del impero japonés, fue el mayor acorazado jamás construido. Tras su hundimiento, la nación entera quedó en shock.",
        nation: "IJN",
        type: "BB",
        caliber: 46,
        unit: "cm"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f1"),
        src: "akagi.jpg",
        alt: "Portaviones Akagi",
        name: "Akagi",
        description: "Uno de los cuatro portaviones japoneses participantes del ataque a Pearl Harbour, hundido meses después en la Battala de Midway.",
        nation: "IJN",
        type: "CV",
        planes: 91
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f2"),
        src: "akebono.jpg",
        alt: "Destructor Akebono",
        name: "Akebono",
        description: "De la magnífica clase Ayanami, rápido y letal, el Akebono entró en combate desde casi el principio de la guerra.",
        nation: "IJN",
        type: "DD",
        speed: 38,
        unit: "knots"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f3"),
        src: "hood.jpg",
        alt: "Crucero de Batalla Hood",
        name: "HMS Hood",
        description: "El Hood llegó a ser el orgullo de la Royal Navy, aun se conserva su mítica campana en el museo nacional británico.",
        nation: "RN",
        type: "CB",
        crew: 1325
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f4"),
        src: "bismarck.jpeg",
        alt: "Acorazado Bismarck",
        name: "Bismarck",
        description: "El icónico Bismarck, una sola salva de su batería principal humilló a toda una nación hundiendo al crucero de batalla HMS Hood.",
        nation: "KMS",
        type: "BB",
        caliber: 38,
        unit: "cm"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f5"),
        src: "ark.jpeg",
        alt: "Portaviones Ark Royal",
        name: "HMS Ark Royal",
        description: "Un magnífico portaviones británico. Sus torpederos Swordfish dieron caza al Bismarck, completándose una venganza histórica.",
        nation: "RN",
        type: "CV",
        planes: 60
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f6"),
        src: "prinz.jpeg",
        alt: "Crucero Pesado Prinz Eugen",
        name: "Prinz Eugen",
        description: "Este hermoso crucero pesado partició junto al Bismack en la Batalla del estrecho de Dinamarca. Sobrevivió al final de la guerra.",
        nation: "KMS",
        type: "CB",
        crew: 1340
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f7"),
        src: "yahagi.jpg",
        alt: "Crucero Ligero Yahagi",
        name: "Yahagi",
        description: "Uno de los más modernos y letales cruceros ligeros de la Armada Japonesa, hicieron falta 6 impactos de torpedos para hundirlo.",
        nation: "IJN",
        type: "CL",
        crew: 450
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f8"),
        src: "enterprise.jpg",
        alt: "Portaviones Enterprise",
        name: "USS Enterprise",
        description: "El gran vencedor de la Batalla de Midway. Del Enterprise despegó el SBD Dauntless del famoso piloto héroe de guerra Dick Best.",
        nation: "USN",
        type: "CV",
        planes: 90
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971f9"),
        src: "fletcher.jpg",
        alt: "Destructor Fletcher",
        name: "USS Fletcher",
        description: "Lider de la clase de destructores más numerosa del mundo, llegando a comisionarse hasta 194 buques de esta brillante clase.",
        nation: "USN",
        type: "DD",
        speed: 36,
        unit: "knots"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971fa"),
        src: "yukikaze.jpg",
        alt: "Destructor Yukikaze",
        name: "Yukikaze",
        description: "\"El inhundible\" Yukikaze pasó a la historia por haber combatido en todas las grandes batallas del pacífico y sobrevivir.",
        nation: "IJN",
        type: "DD",
        speed: 35,
        unit: "knots"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971fb"),
        src: "kgv.jpeg",
        alt: "Acorazado King George V",
        name: "HMS King George V",
        description: "La clase de acorazados britáticos King Georce V destacan no solo por su potencia sino también por su belleza y elegancia.",
        nation: "RN",
        type: "BB",
        caliber: 16,
        unit: "inch"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971fc"),
        src: "yuudachi.jpg",
        alt: "Destructor Yuudachi",
        name: "Yuudachi",
        description: "Su coraje y temeridad en la Batalla de Guadalcanal le valieron el apodo de \"La pesadilla de Salomón\", hundió 3 buques americanos",
        nation: "IJN",
        type: "DD",
        speed: 34,
        unit: "knots"
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971fd"),
        src: "albacore.jpg",
        alt: "Submarino Albacore",
        name: "USS Albacore",
        description: "Famoso por dar caza al portaviones blindado Taihou antes de que este pudiese siquiera llegar a entrar en combate por primera vez.",
        nation: "USN",
        type: "SS",
        crew: 60,
    }),
    new Ship({
        _id: new ObjectId("6225c54f1a178ac6da2971fe"),
        src: "jervis.jpg",
        alt: "Destructor Jervis",
        name: "HMS Jervis",
        description: "Con 13 Battle Honours en su haber, este destructor británico de la séptima flotilla del Mediterraneo es toda una insignia real",
        nation: "RN",
        type: "DD",
        speed: 36,
        unit: "knots"
    })
]

module.exports = {
    AdminId,
    UserAdminData,
    ShipData
}