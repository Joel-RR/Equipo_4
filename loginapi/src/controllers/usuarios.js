import Usuario from "../models/Usuario.js";

// Get all products
export const getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll();
        res.send(usuario);
    } catch (err) {
        console.log(err);
    }
}

// Get product by id
export const getUsuarioById = async (req, res) => {
    try {
        const Usuario = await Usuario.findAll({
            where: {
                usuario: req.params.usuario
            }
        });
        res.send(Usuario[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new product
export const createUsuario = async (req, res) => {
    try {
        await Usuario.create(req.body);
        res.json({
            "message": "Usuario Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product by id
export const updateUsuario = async (req, res) => {
    try {
        await Usuario.update(req.body, {
            where: {
                usuario: req.params.usuario
            }
        });
        res.json({
            "message": "Usuario Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product by id
export const deleteUsuario = async (req, res) => {
    try {
        await Usuario.destroy({
            where: {
                usuario: req.params.usuario
            }
        });
        res.json({
            "message": "Usuario Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}