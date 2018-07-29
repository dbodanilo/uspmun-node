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

app.use("/images", express.static("./public/images"));
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
    subtitle: "",
    paragraphs: [],
    diretores: [],
    style: "",
    body: "",
    script: ""
}

app.get(["/", "/index"], function (sol, res) {
    pagina = {};
    pagina.title = "Home";

    fs.readFile("./public/pages/index-content.html", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/sobre", function (sol, res) {
    pagina = {};
    pagina.title = "Sobre";

    fs.readFile("./public/pages/sobre-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/edicao", function (sol, res) {
    pagina = {};
    pagina.title = "Edição 2018";

    fs.readFile("./public/pages/edicao-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/comites", function (sol, res) {
    pagina = {};
    pagina.title = "Comitês";

    fs.readFile("./public/pages/comites-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/inscricao", function (sol, res) {
    pagina = {};
    pagina.title = "Inscrição";

    fs.readFile("./public/pages/inscricao-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/parcerias", function (sol, res) {
    pagina = {};
    pagina.title = "Parcerias";

    fs.readFile("./public/pages/parcerias-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/duvidas", function (sol, res) {
    pagina = {};
    pagina.title = "FAQ";

    fs.readFile("./public/pages/duvidas-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/comiteSample", function (sol, res) {
    pagina = {};
    pagina.title = "OCA";

    fs.readFile("./public/pages/comiteSample-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

app.get("/unsc", function (sol, res) {
    pagina = {};
    pagina.title = "UNSC";

    res.render("comite-shell", { content: pagina });
});

app.get("/prb", function (sol, res) {
    pagina = {};
    pagina.title = "PRB";
    pagina.subtitle = "A matter of dignity: Mohamedou Ould Slahi’s Case";
    pagina.paragraphs = [
        "When Robert Hooke looked through his microscope, he found several tiny boxes, each as a structure that strengthened and formed something bigger, more organized. These cells were given the name of cells, because of their resemblance to the shape of the prison cells. But would the comparison end there? In a prison, we have in each cell a history, an organization, a human being with its own DNA, which has a function in society. The union of these various cells can be called the prison tissue, which has functions in a larger organ called society. When a tissue fails in its function, we have the organ damage, and this is what this committee will propose to discuss: the analysis of a case that covers a whole problematic of the real functioning of one of the most important prisoners of today, the Guantanamo prison.",
        "Mohamedou Ould Slahi - author of the book \"Guantanamo Diary\" - was part of Al Qaeda in its early days when the organization had gathered to withdraw an authoritarian representative. Salahi followed his life after the movement changed its guidelines, but was arrested in the late twentieth century, and again after the 2001 attacks, by keeping in touch with friends, members of Al Qaeda, then a terrorist group.",
        "To maintain the likelihood, your directors will work alongside Mohamedou, who supported the creation of this committee. So, with the history and evidence we will provide to our delegates, representatives of a non-legal organization - the Periodic Review Board, created by the United States Home Affairs Bureau - they are to examine whether or not a security breach occurred, which justified or not the loss of individual freedoms, morally and physically damaging the organ called society."
    ];

    pagina.diretores = [
        {
            nome: 'Rafaela Ferrari',
            cargo: 'Academic Director',
            descricao: [
                "Rafaela is a student of international relations at the University of Brasilia, but she was born and raised in São Paulo until she was 18 years old. She is currently doing research on the exiles of the Brazilian dictatorship who went to Mozambique, besides studying 4 subjects in 5 different colleges (her greatest physical activity is walking between different university buildings).",
                "When she does not simulate, she likes to read about neurosciences, poetry, horror stories based on real facts, religion, astronomy, and even comic books about quantum physics (but make no mistake, she's taurine and not librian). She also likes to listen to different accents; going to the movies alone to laugh at sarcastic jokes with people over 60; travel alone; paint frames using her body as a brush; watch videos of people bursting blackheads; and chase after animals to cuddle.",
                "There are those who say that, despite appearing as a 13-year-old cute child, she can be one of the most serious and strict people depending on the moment. Fortunately however true this is, she is always open to hugs, outbursts, and constructive feedbacks."
            ]
        },
        {
            nome: 'Arthur Balbani',
            cargo: 'Assistant Director',
            descricao: [
                "Arthur Balbani is a fourth-year undergraduate of Law at the University of São Paulo and a passionate researcher of the Legislative Procedure.",
                "Although Arthur plays a role at USPMUN, he spend most of his time at fancy events, at the São Paulo State Court or at his favourite place: any good restaurant.",
                "If you urge to find him, it is advisable to double-check if there are not any Constitutional Law or Legal Medicine classes going on - in case of a positive answer, he shall be there."
            ]
        },
        {
            nome: 'Gustavo Schneider',
            cargo: 'Assistant Director',
            descricao: [
                "Gustavo Schneider is a second-year studying Law at USP - São Francisco (Aka Sanfran) and an economy student wannabe.",
                "Besides being involved in USPMUN, Gustavo is currently secretary-general in a high school conference from ETAPA and has worked as academic undersecretary for the GA committees in SPMUN.",
                "In the scarce time that he has left, he can usually be found in his natural habitat: any Criminal or Commercial Law courses in São Francisco. Other than that, he loves photography and may get overexcited if you happen to mention contemporary brazilian economical/political issues."
            ]
        }
    ]

    res.render("comite-shell", { content: pagina });
});

app.get("/embraer", function (sol, res) {
    pagina = {};
    pagina.title = "Embraer";

    res.render("comite-shell", { content: pagina });
});

app.get("/ce", function (sol, res) {
    pagina = {};
    pagina.title = "Embraer";

    res.render("comite-shell", { content: pagina });
});

app.get("/oea", function (sol, res) {
    pagina = {};
    pagina.title = "Embraer";

    res.render("comite-shell", { content: pagina });
});

app.get("/imprensa", function (sol, res) {
    pagina = {};
    pagina.title = "Imprensa";

    res.render("comite-shell", { content: pagina });
});

app.get("/secretariado", function (sol, res) {
    pagina = {};
    pagina.title = "Secretariado";

    fs.readFile("./public/pages/secretariado-content.html", "utf-8", function (err, data) {
        if (err) {
            res.render("error-shell", { erro: err });
        }
        else {
            pagina.body = data;
            res.render("index-shell", { content: pagina });
        }
    });
});

var server = http.createServer(app);
server.listen(1234, console.log("servidor rodando na porta 1234..."));
