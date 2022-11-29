const Sequelize = require("sequelize");
const usuario = "thiago";
const senha = "34616096";
const database = "ceep";

const sequelize = new Sequelize(database, usuario, senha, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}




















/*    const Sequelize = require("sequelize");
    const usuario = "thiago";
    const senha = "34616096";
    const database = "sistemadecadastro";

    const sequelize = new Sequelize(database, usuario, senha, {
        host: "localhost",
        dialect: "mysql"
    });



    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }
*/

