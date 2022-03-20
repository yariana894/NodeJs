const app = require("./app");
const cors = require("cors");
const fetch = require("node-fetch");
const { listenerCount } = require("./app");
let civilizations = [];
let units = [];

app.use(cors());

fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
  .then((res) => res.json())
  .then((text) => (civilizations = text.civilizations))
  .catch((error) => console.log(error));

fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/units")
  .then((res) => res.json())
  .then((text) => (units = text.units))
  .catch((error) => console.log(error));

app.get("/civilizaciones", (req, res) => {
  let datosFiltrados = [];
  civilizations.forEach((element) => {
    if (element["expansion"] == "Age of Kings") {
      let dato = [];
      dato.push(element["id"], element["name"], element["army_type"]);
      datosFiltrados.push(dato);
    }
  });
  res.send(datosFiltrados);
});

app.get("/existe/:nombre", (req, res) => {
  let { nombre } = req.params;
  nombre = nombre.toLowerCase();
  nombre = nombre.trim();
  let existe = false;
  civilizations.forEach((element) => {
    if (element["name"].toLowerCase() == nombre) {
      existe = true;
    }
  });
  res.send(existe);
});

app.get("/busca_unidades", (req, res) => {
  const nombre = req.query.nombre;
  const ataque = req.query.ataque;
  let datosFiltrados = [];
  units.forEach((element) => {
    if (typeof nombre === "string" && typeof ataque === "string") {
      if (element["name"].includes(nombre) && element["attack"] >= ataque) {
        let dato = [];
        dato.push(
          element["id"],
          element["name"],
          element["description"],
          element["expansion"],
          element["cost"]["Wood"],
          element["cost"]["Gold"],
          element["build_time"],
          element["attack"],
          element["armor"]
        );
        datosFiltrados.push(dato);
      }
    } else if (typeof ataque == "string" || ataque == "undefined") {
      if (element["attack"] >= ataque) {
        let dato = [];
        dato.push(
          element["id"],
          element["name"],
          element["description"],
          element["expansion"],
          element["cost"]["Wood"],
          element["cost"]["Gold"],
          element["build_time"],
          element["attack"],
          element["armor"]
        );
        datosFiltrados.push(dato);
      }
    } else if (typeof nombre === "string") {
      if (element["name"].includes(nombre)) {
        let dato = [];
        dato.push(
          element["id"],
          element["name"],
          element["description"],
          element["expansion"],
          element["cost"]["Wood"],
          element["cost"]["Gold"],
          element["build_time"],
          element["attack"],
          element["armor"]
        );
        datosFiltrados.push(dato);
      }
    }
  });
  res.send(datosFiltrados);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\frontend\\index.html");
});

let listener = app.listen(6800, () => {
  console.log("Iniciado en puerto " + listener.address().port);
});
