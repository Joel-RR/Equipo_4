import Cita from "../models/Cita.js";

// Get all products
export const getCita = async (req, res) => {
    try {
        const cita = await Cita.findAll();
        res.send(cita);
    } catch (err) {
        console.log(err);
    }
}

// Get product by id
export const getCitaById = async (req, res) => {
    try {
        const Cita = await Cita.findAll({
            where: {
                cita: req.params.cita
            }
        });
        res.send(Cita[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new product
export const createCita = async (req, res) => {
    try {
        await Cita.create(req.body);
        res.json({
            "message": "Cita Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product by id
export const updateCita = async (req, res) => {
    try {
        await Cita.update(req.body, {
            where: {
                cita: req.params.cita
            }
        });
        res.json({
            "message": "Cita Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product by id
export const deleteCita = async (req, res) => {
    try {
        await Cita.destroy({
            where: {
                cita: req.params.cita
            }
        });
        res.json({
            "message": "Cita Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}