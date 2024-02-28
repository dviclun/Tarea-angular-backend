"use strict";

//Importar el paquete de mysql

import { MongoClient } from 'mongodb';
const URI = "mongodb+srv://dviclun:dviclun@mongodbnodejs.vggezy7.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBNodeJs"

//Crear la instacia de MongoDB utilizando la URI que nos ha proporcionado mongo db

const client = new MongoClient(URI);

let conexion;
const conexionBD = async () => {
    //Conectar al servidor de forma asincrona
    try {
        if (!conexion) {
            conexion = await client.connect();
            console.log("Conectada la base de datos MongoDB");
        }
        return conexion.db("tareas");
    } catch (error) {
        console.log("Error, base de datos no conectada");
    }

}

export default conexionBD;



