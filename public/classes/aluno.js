const Matriculas = require("../../models/Matricula");

class Aluno {
    constructor(nome, cpf, nasc, naturalidade, curso, turno, turma, modulo, ativo=true) {
        this.nome = nome,
        this.cpf = cpf,
        this.nasc = nasc,
        this.naturalidade = naturalidade,
        this.curso = curso,
        this.turno = turno,
        this.turma = turma,
        this.modulo = modulo,
        this.ativo = ativo
    }

    async cadastrarAluno(aluno) {
        await Matriculas.create(aluno);
    }

    async atualizarAluno(aluno, id) {
        await Matriculas.update(aluno, {
            where: {
                id: id
            }
        })
    }

    async mostrarAlunos() {
        const students = await Matriculas.findAll({
            where: {
                ativo: true
            }
        }, {
            order: [["id", "DESC"]]
        })  
        
        return students
    }

    async mostrarAluno(id) {
        const student = await Matriculas.findOne({
            where: {
                id: id
            }
        })

        return student;
    }

    async deleteAluno(id) {
        await Matriculas.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = Aluno;