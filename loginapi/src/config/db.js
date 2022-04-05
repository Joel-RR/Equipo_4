// import sequelize<font></font>
import { Sequelize } from "sequelize";
// create connection<font></font>
const db = new Sequelize('alumnos', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    username: 'root',
    password: 'root'

});
// export connection<font></font>
export default db;