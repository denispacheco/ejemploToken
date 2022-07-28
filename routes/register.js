//carga de las librerias
const express=require("express");
//inicializacion del router donde guardaremos las rutas del login
const router=express.Router();
//carga de las funciones del controlador del login
const {getRegister,postRegister}=require("../controllers/register");
//agregar las rutas
router.get("/",getRegister);
router.post("/",postRegister);

module.exports=router;