// import sequelize 
import { DataTypes } from "sequelize";
// import connection 
import db from "../config/db.js";

// Define schema
const Persona = db.define('personas', {
  // Define attributes

  
  nombre: {
    type: DataTypes.STRING
  },
  apaterno: {
    type: DataTypes.STRING
  },
  amaterno: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true,
   updatedAt: true,
   createdAt: true
});

// Export model Product
export default Persona;