//carga de las librerias
const express=require("express");
//inicializacion del router donde guardaremos las rutas del login
const router=express.Router();
//carga de las funciones del controlador del login
const {getLogin,postLogin}=require("../controllers/login");
//agregar las rutas
router.get("/",getLogin);
router.post("/",postLogin);

module.exports=router;

