var http = require("http");
var fs = require("fs");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public/styles"));
app.use(express.static("./public/scripts"));
app.use(express.static("./public/logos"));

app.use("/images",express.static("./public/images"));
app.use("/bootstrap", express.static("./public/bootstrap-4.1.1-dist"));
app.use("/fa", express.static("./public/fontawesome-free-5.1.0-web"))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost/labs");
// mongoose.connect("mongodb://danilo:senha@localhost/labs");

// var esquemaDelegado = new mongoose.Schema({
//     dbNome: String,
//     dbEmail: String,
//     dbCidade: ...
// });

// var Delegado = mongoose.model("delegados", esquemaDelegado);

var pagina = {
    title: "",
    style: "",
    body: "",
    script: ""
}

app.get(["/", "/index"], function(sol, res) {
    pagina.title = "Home";

    fs.readFile("./public/pages/index-content.html", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/sobre", function(sol, res) {
    pagina.title = "Sobre";

    fs.readFile("./public/pages/sobre-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/edicao", function(sol, res) {
    pagina.title = "Edição 2018";

    fs.readFile("./public/pages/edicao-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/comites", function(sol, res) {
    pagina.title = "Comitês";

    fs.readFile("./public/pages/comites-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/inscricao", function(sol, res) {
    pagina.title = "Inscrição";

    fs.readFile("./public/pages/inscricao-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/parcerias", function(sol, res) {
    pagina.title = "Parcerias";

    fs.readFile("./public/pages/parcerias-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/duvidas", function(sol, res) {
    pagina.title = "FAQ";

    fs.readFile("./public/pages/duvidas-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/comiteSample", function(sol, res) {
    pagina.title = "OCA";

    fs.readFile("./public/pages/comiteSample-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

app.get("/secretariado", function(sol, res) {
    pagina.title = "Secretariado";

    fs.readFile("./public/pages/secretariado-content.html", "utf-8", function(err, data) {
        if (err) {
            res.render("error-shell", {erro: err});
        }
        else {
            pagina.body = data;
            res.render("index-shell", {content: pagina});
        }
    });
});

var server = http.createServer(app);
server.listen(1234, console.log("servidor rodando na porta 1234..."));
