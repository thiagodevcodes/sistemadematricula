const db = require("./db");

const Matriculas = db.sequelize.define("alunos", {  
    nome: {
        type: db.Sequelize.STRING
    },

    nasc: {
        type: db.Sequelize.DATEONLY
    },

    naturalidade: {
        type: db.Sequelize.STRING
    },

    cpf: {
        type: db.Sequelize.STRING
    },

    turma: {
        type: db.Sequelize.STRING
    },

    curso: {
        type: db.Sequelize.STRING
    },

    turno: {
        type: db.Sequelize.STRING
    },

    modulo: {
        type: db.Sequelize.INTEGER
    },

    ativo: {
        type: db.Sequelize.BOOLEAN
    }
});

//Matriculas.sync({force: true});

module.exports = Matriculas;