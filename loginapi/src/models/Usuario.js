// import sequelize 
import { DataTypes } from "sequelize";
// import connection 
import db from "../config/db.js";

// Define schema
const Usuario = db.define('usuarios', {
  // Define attributes
  usuario: {
    type: DataTypes.STRING
  },
  contrasena: {
    type: DataTypes.STRING
  },
  id_persona: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true,
   updatedAt: true,
   createdAt: true
});

// Export model Product
export default Usuario;