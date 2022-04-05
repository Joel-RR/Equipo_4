// import sequelize 
import { DataTypes } from "sequelize";
// import connection 
import db from "../config/db.js";

// Define schema
const Cita = db.define('cita', {
  // Define attributes

  id_persona: {
    type: DataTypes.INTEGER
  },
  fecha: {
    type: DataTypes.STRING
  },
  estatus: {
    type: DataTypes.STRING
  },
  motivo: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true,
   updatedAt: true,
   createdAt: true
});

// Export model Product
export default Cita;