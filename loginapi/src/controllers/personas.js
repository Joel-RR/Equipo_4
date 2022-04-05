import Personas from "../models/Persona.js";

// Get all products
export const getPersonas = async (req, res) => {
    try {
        const personas = await Personas.findAll();
        res.send(personas);
    } catch (err) {
        console.log(err);
    }
}

// Get product by id
export const getPersonasById = async (req, res) => {
    try {
        const Personas = await Personas.findAll({
            where: {
                personas: req.params.personas
            }
        });
        res.send(Personas[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new product
export const createPersonas = async (req, res) => {
    try {
        await Personas.create(req.body);
        res.json({
            "message": "Personas Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product by id
export const updatePersonas = async (req, res) => {
    try {
        await Personas.update(req.body, {
            where: {
                personas: req.params.personas
            }
        });
        res.json({
            "message": "Personas Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product by id
export const deletePersonas = async (req, res) => {
    try {
        await Personas.destroy({
            where: {
                personas: req.params.personas
            }
        });
        res.json({
            "message": "Personas Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}