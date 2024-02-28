import conexionBD from "../mongodb_connector.js"; //Conexion con la base de datos
import { ObjectId } from "mongodb";

export const getTareas = async (req, res) => {
    try {
        const database = await conexionBD();

        const collection = database.collection("tarea");

        const result = await collection.find({}).toArray();
        console.log(result)
        res.status(201).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

export const getTareasByStatus = async (req, res) => {
    try {
        const { estado } = req.params;
        const database = await conexionBD();

        const collection = database.collection("tarea");

        const result = await collection.find({ estado: estado }).toArray();
        console.log(result)
        res.status(201).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

export const getTareasByUser = async (req, res) => {
    try {
        const { user } = req.params;
        const database = await conexionBD();

        const collection = database.collection("tarea");

        const result = await collection.find({ id_usuario: user }).toArray();
        console.log(result)
        res.status(201).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

export const getTarea = async (req, res) => {
    try {
        const { id } = req.params;

        const database = await conexionBD();

        const collection = database.collection("tarea");

        const result = await collection.findOne({ _id: new ObjectId(id) });
        console.log({ result })
        res.status(201).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

export const getUsuarios = async (req, res) => {
    try {
        const database = await conexionBD();

        const collection = database.collection("usuario");

        const result = await collection.find({}).toArray();
        console.log(result)
        res.status(201).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }

};

export const getUsuario = async (req, res) => {
    try {

        const { id } = req.params;

        const database = await conexionBD();

        const collection = database.collection("usuario");

        const result = await collection.findOne({ _id: new ObjectId(id) });
        console.log(result)
        res.status(201).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }

};


export const borrarTarea = async (req, res) => {
    try {
        const { idTarea } = req.body;

        const database = await conexionBD();
        const collection = database.collection("tarea");

        //Instruccion MQL
        const result = await collection.deleteOne({ _id: new ObjectId(idTarea) });

        if (result.deletedCount == 0) {
            res.status(400).json(
                {
                    message: "La tarea no existe"
                }
            )
        } else {
            res.status(201).json(
                {
                    message: "Tarea eliminada"
                }
            )
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const nuevaTarea = async (req, res) => {
    try {

        const { titulo, descripcion, fecha, estado, id_usuario, importancia } = req.body;

        const database = await conexionBD();
        const collection = database.collection("tarea");

        //Instruccion MQL
        const result = await collection.insertOne({ titulo, descripcion, fecha, estado, id_usuario, importancia });

        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const actualizarTarea = async (req, res) => {
    try {

        const { titulo, descripcion, fecha, estado, id_usuario, importancia } = req.body;

        const { id } = req.params;

        const database = await conexionBD();
        const collection = database.collection("tarea");

        //Instruccion MQL
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { titulo, descripcion, fecha, estado, id_usuario, importancia } });

        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
