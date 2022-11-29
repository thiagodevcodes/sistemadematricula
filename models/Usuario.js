const db = require("./db");

const Users = db.sequelize.define("usuarios", {
    login: {
        type: db.Sequelize.STRING
    },

    senha: {
        type: db.Sequelize.STRING
    },

    admin: {
        type: db.Sequelize.BOOLEAN
    },

    ativo: {
        type: db.Sequelize.BOOLEAN
    }
});

//Users.sync({force: true});

module.exports = Users;