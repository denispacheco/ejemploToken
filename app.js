//carga de librerias
const express = require('express')
const router=require("./routes");

//configuracion
const app = express();
//carpeta de archivos estáticos
app.use(express.static("public"));
//motor de vistas ejs
app.set("view engine","ejs");
//carpeta de las vistas
app.set("views",__dirname+"/views");

//carga de rutas---siempre al final
app.use("/",router);

module.exports=app;
