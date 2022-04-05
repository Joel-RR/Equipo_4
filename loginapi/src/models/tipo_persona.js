// import sequelize 
import { DataTypes } from "sequelize";
// import connection 
import db from "../config/db.js";

// Define schema
const Tipo_Persona = db.define('tipo_persona', {
  // Define attributes

  
  admin: {
    type: DataTypes.STRING
  },
  alumno: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true,
   updatedAt: true,
   createdAt: true
});

// Export model Product
export default Tipo_Persona;