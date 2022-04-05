import Tipo_Persona from "../models/Tipo_Persona.js";

// Get all products
export const getTipo_Persona = async (req, res) => {
    try {
        const tipo_persona = await Tipo_Persona.findAll();
        res.send(tipo_persona);
    } catch (err) {
        console.log(err);
    }
}

// Get product by id
export const getTipo_PersonaById = async (req, res) => {
    try {
        const Tipo_Persona = await Tipo_Persona.findAll({
            where: {
                tipo_persona: req.params.tipo_persona
            }
        });
        res.send(Tipo_Persona[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new product
export const createTipo_Persona = async (req, res) => {
    try {
        await Tipo_Persona.create(req.body);
        res.json({
            "message": "Tipo_Persona"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product by id
export const updateTipo_Persona = async (req, res) => {
    try {
        await Tipo_Persona.update(req.body, {
            where: {
                tipo_persona: req.params.tipo_persona
            }
        });
        res.json({
            "message": "Tipo_Persona Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product by id
export const deleteTipo_Persona = async (req, res) => {
    try {
        await Tipo_Persona.destroy({
            where: {
                tipo_persona: req.params.tipo_persona
            }
        });
        res.json({
            "message": "Tipo_Persona Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}