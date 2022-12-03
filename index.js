const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const handlebars = require("express-handlebars");
const admin = require("./routes/admin");

//Config
    //Template Engine
    app.engine("handlebars", handlebars.engine({defaultLayout: "main", runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }}));
    app.set("view engine", "handlebars");

   //Body Parser 
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //Public
    app.use(express.static(path.join(__dirname, "public")))

//Rotas 
    app.use("/", admin);

//Server
const port = 8081
app.listen(port, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});