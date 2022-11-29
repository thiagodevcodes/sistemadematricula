const router = require("express").Router();
const Usuario = require("../public/classes/usuario");
const Aluno = require("../public/classes/aluno");
let userativo = {
    login: null,
    senha: null,
    admin: false
}

//Sistema
    //ACESSAR - Sistema

    router.get("/", (req, res) => {
        res.render("login")
    })

    router.get("/usuario/cadastro", (req, res) => {
        res.render("caduser");
    })

    router.get("/usuario/atualizar", (req, res) => {
        res.render("upuser");
    })

    router.get("/home", (req, res) => {
        res.render("home")
    })

    router.get("/home/admin", (req, res) => {
        res.render("homeadmin")
    })


//Usuário
    //ACESSO - Usuário

    router.post("/auth", async(req, res) => {
        
        await Usuario.prototype.acessarSistema(req.body.login, req.body.senha)
        .then( (acess) => {
            userativo.login = req.body.login
            userativo.senha = req.body.senha,
            userativo.admin = acess.admin

            if(acess.sucess == true) {
                res.redirect("/alunos") 
            } else {
                res.redirect("/login")
            }
        }).catch( () => {
            res.send("Not Found")
        })
        
    })

    //CREATE - Usuário

        router.post("/usuarios", async(req,res) => {
            let user = new Usuario(
                req.body.login,
                req.body.senha,
                req.body.confirm,
                req.body.admin,
                true
            )
    
            if(user.senha = user.confirm) {
                await user.cadastrarUsuario(user)
                .then( () => {
                    res.redirect("/usuarios")
                }).catch( () => {
                    res.send("Not Found")
                })
            }
        })

    //READ - Usuário

    router.get("/usuarios", async(req, res) => {
        await Usuario.prototype.mostrarUsuarios()
        .then( (posts) => {
            res.render("usuarios", {
                posts: posts
            })
        }).catch( () => {
            res.send("Not Found");
        }) 
    })

    //UPDATE - Usuário

    router.post("/usuario/alterarsenha", async(req, res) => {
        await Usuario.prototype.alterarSenha(req.body.login, req.body.senha, req.body.confirm)
        .then( (alter) => {
            (alter == true) ? res.redirect("/login") : res.redirect("/usuario/atualizar")
        }).catch( () => {
            res.send("Not Found")
        })
    })

    router.post("/usuarios/editar/:id", async(req, res) => {
        await Usuario.prototype.atualizarUsuario(req.body, req.params.id) 
        .then( () => {
            res.redirect("..")
        }).catch( () => {
            res.send("Not Found")
        })
    })

    router.get("/usuarios/finalizar/:id", async(req, res) => {
        await Usuario.prototype.atualizarUsuario({ ativo: false }, req.params.id)
        .then( () => {
            res.redirect("..")
        }).catch( () => {
            res.send("Not Found")
        });
    })

    router.get("/usuarios/permissao/:id", async(req, res) => {
        const user = await Usuario.prototype.mostrarUsuario(req.params.id);
        const admin = user.admin;

        await Usuario.prototype.atualizarUsuario({ admin: !admin }, req.params.id)
        .then( () => {
            res.redirect("..")
        }).catch( () => {
            res.send("Not Found")
        });
    })

    //DELETE - Usuário

    router.get("/usuarios/excluir/:id", async(req, res) => {
        await Usuario.prototype.deleteUsuario(req.params.id)
        .then( () => {
            res.redirect("/usuarios")
        }).catch( () => {
            res.send("Not Found")
        });
    })

//Aluno
    //CREATE - Aluno

    router.post("/alunos", async(req, res) => {
        let aluno = new Aluno(
            req.body.nome,
            req.body.cpf,
            req.body.nasc,
            req.body.naturalidade,
            req.body.curso,
            req.body.turno,
            req.body.turma,
            req.body.modulo,
            true
        )

        await aluno.cadastrarAluno(aluno)
        .then(() => {
            res.redirect("/alunos")   
        }).catch( () => {
            res.send("Not Found");
        })
    })

    //READ - Alunos

    router.get("/alunos", async (req, res) => {
        await Aluno.prototype.mostrarAlunos()
        .then( (posts) => {
            if(userativo.admin == true) {
                res.render("homeadmin", {
                    posts: posts
                })
            } else {
                res.render("home", {
                    posts: posts
                })
            }
        }).catch( () => {
            res.send("Not Found");
        })    
    })

    //UPDATE - Aluno

    router.post("/alunos/editar/:id", async(req, res) => {
        await Aluno.prototype.atualizarAluno(req.body, req.params.id) 
        .then( () => {
            res.redirect("..")
        }).catch( () => {
            res.send("Not Found")
        })
    })

    router.get("/alunos/finalizar/:id", async(req, res) => {
        await Aluno.prototype.atualizarAluno({ ativo: false }, req.params.id)
        .then( () => {
            res.redirect("..")
        }).catch( () => {
            res.send("Not Found")
        });
    })

    router.get("/alunos/editar/:id", async(req, res) => {
        await Aluno.prototype.mostrarAluno(req.params.id)
        .then( (alunoedit) => {
            res.render("update", {
                id: alunoedit.id,
                nome: alunoedit.nome,
                cpf: alunoedit.cpf,
                nasc: alunoedit.nasc,
                naturalidade: alunoedit.naturalidade,
                curso: alunoedit.curso,
                turma: alunoedit.turma,
                turno: alunoedit.turno,
                modulo: alunoedit.modulo
            })
        }).catch( () => {
            res.send("Not Found")
        })
    })


    //DELETE - Aluno

    router.get("/alunos/excluir/:id", async(req, res) => {
        await Aluno.prototype.deleteAluno(req.params.id)
        .then( () => {
            res.redirect("/alunos/registros")
        }).catch( () => {
            res.send("Not Found")
        });
    })

module.exports = router;
