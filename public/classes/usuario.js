const Users = require("../../models/Usuario");

class Usuario {
    constructor(login, senha, confirm, admin, ativo) {
        this.login = login,
        this.senha = senha,
        this.confirm = confirm,
        this.admin = admin,
        this.ativo = ativo
    }

    async acessarSistema(login, senha) {
        let acess = {
            sucess: false,
            login: login,
        };

        const user = await Users.findAll({
            where: {
                login: login,
                senha: senha
            }
        })

        if(user.length != 0) {
            acess.sucess = true;
            if(user[0].admin == true) {
                acess.admin = true
            }
        } 

        return acess;
    }

    async cadastrarUsuario(user) {
        if(user.admin == null) { user.admin = false }

        await Users.create(user)
    }

    async atualizarUsuario(usuario, id) {
        await Users.update(usuario, {
            where: {
                id: id
            }
        })
    }

    async alterarSenha(login, senha, confirm) {
        let alter = false;
        
        if(senha == confirm) {
            Users.update({
                senha: senha
            }, { where: {
                login: login
            }})

            alter = true
        } 

        return alter
    }

    async deleteUsuario(id) {
        await Users.destroy({
            where: {
                id: id
            }
        })
    }

    async mostrarUsuarios() {
        const users = await Users.findAll({
            where: {
                ativo: true
            }
        }, {
            order: [["id", "DESC"]]
        })  
        
        return users
    }

    async mostrarUsuario(id) {
        const user = await Users.findOne({
            where: {
                id: id
            }
        })

        return user;
    }
}

module.exports = Usuario;