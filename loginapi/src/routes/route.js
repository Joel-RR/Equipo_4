// Import express
import express from "express";
// Import Product Controller
import { 
    getUsuario,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
 } from "../controllers/usuarios.js";
 import { 
    getCita,
    getCitaById,
    createCita,
    updateCita,
    deleteCita
 } from "../controllers/cita.js";
 import { 
    getPersonas,
    getPersonasById,
    createPersonas,
    updatePersonas,
    deletePersonas
 } from "../controllers/personas.js";
 import { 
    getTipo_Persona,
    getTipo_PersonaById,
    createTipo_Persona,
    updateTipo_Persona,
    deleteTipo_Persona
 } from "../controllers/tipo_persona.js";

 // Init express router
const router = express.Router();

// Route get all products
router.get('/usuarios', getUsuario);
// Route get product by id
router.get('/usuarios/:id', getUsuarioById);
// Route create a new product
router.post('/usuarios', createUsuario);
// Route update product by id
router.put('/usuarios/:id', updateUsuario);
// Route delete product by id
router.delete('/usuarios/:id', deleteUsuario);

router.get('/cita', getCita);
// Route get product by id
router.get('/cita/:id', getCitaById);
// Route create a new product
router.post('/cita', createCita);
// Route update product by id
router.put('/cita/:id', updateCita);
// Route delete product by id
router.delete('/cita/:id', deleteCita);

router.get('/personas', getPersonas);
// Route get product by id
router.get('/persona/:id', getPersonasById);
// Route create a new product
router.post('/personas', createPersonas);
// Route update product by id
router.put('/personas/:id', updatePersonas);
// Route delete product by id
router.delete('/personas/:id', deletePersonas);

router.get('/tipo_persona', getTipo_Persona);
// Route get product by id
router.get('/tipo_persona/:id', getTipo_PersonaById);
// Route create a new product
router.post('/tipo_persona', createTipo_Persona);
// Route update product by id
router.put('/tipo_persona/:id', updateTipo_Persona);
// Route delete product by id
router.delete('/tipo_persona/:id', deleteTipo_Persona);


// export router
export default router;