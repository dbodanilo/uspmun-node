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
    pagina.subtitle = [
        "Fighting a faceless ghost:",
        "The efforts against the arising terrorist threat"
    ];

    pagina.paragraphs = [
        "The United Nation's Security Council (UNSC) tackles the new threat of the XXI century: modern terrorism in a globalized world. To discuss such matter, it will be necessary to go to the roots of the word itself, analyzing it's history do discover what is terrorism in the modern world, after its long history.",
        "The system of debate of this committee will follow the pattern of other Model UN in São Paulo, with some changes in order to reflect better the reality of the UNSC.",
        "After determining what terrorism is to the UNSC, the next order of business shall be to formulate general strategies to prevent, combat and attenuate terrorist movements (in accordance to the committee definition of what is that)."
    ];

    pagina.diretores = [
        {
            nome: "Victor Portela",
            cargo: "Academic Director",
            descricao: [
                "Hello everyone! I am Victor Portela Costa Marotti, I am 18 years old and (as the rest of the chair) come from São Bernardo do Campo. Many things interest me, such as books, movies, college and Model UN. However, combine that with an extreme case of procrastination and you get someone who has done at least 10% of everything, but never 100% of something! To talk about everything that I have interest in would, therefore, be Impossible, but to summarize: Linguistics, Law, History, Geography, Marvel Comics (specifically spider-man), Lord of the rings and oh, so much more.",
                "Currently I study Law at Faculdade de Direito de São Bernardo do Campo, which I am loving, working as an intern at Banco Société Générale Brasil, also amazing and finally giving what little free time I have left to this amazing event!"
            ]
        },
        {
            nome: "Bruno Daré",
            cargo: "Assistant Director",
            descricao: [
                "Aloha, people! I am Bruno Daré Riotto Malta Campos, I am 19 years old, and I come from the megalopolis of São Bernardo do Campo. I am deeply passionate about music and the seventh art (some would say I am a cinephile). I am also obsessed with philosophy, economics, memes.",
                "I often am being ironic and that’s usually how I describe my personality. I am amused by discussions, existential crises and knowledge in general – I am currently learning how to play the piano and reading Albert Camus. I would say more about myself but my horoscope suggested that I shouldn’t. I recently joined tinder."
            ]
        },
        {
            nome: "Lucas Motta",
            cargo: "Assistant Director",
            descricao: [
                "Hello, I am Lucas Motta Moreira, I am 18 years old and I come from São Bernardo do Campo. My hobbies and activities are different of the interests of the other directors, starting by the fact that I like math and chemistry, which takes me to study chemistry engineering at University of São Paulo. I am also a great fan of sport, I like most of them, although I am not good playing any of them, about sport, the things that probably like most are the tactics behind the game and how they influence the society and the political relations.",
                "The convergent point between me and the others members of the chair is the MUN, we all knew it during our high school and since then started to participate of that. As a chair joined by the MUN we are going to do our best to join (or not) the delegates on the pursuit of a solution."
            ]
        }
    ]

    res.render("comite-shell", { content: pagina });
});

app.get("/prb", function (sol, res) {
    pagina = {};
    pagina.title = "PRB";
    pagina.subtitle = [
        "A matter of dignity:",
        "Mohamedou Ould Slahi’s Case"
    ];

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
    pagina.title = "CE";

    res.render("comite-shell", { content: pagina });
});

app.get("/oea", function (sol, res) {
    pagina = {};
    pagina.title = "OEA";

    res.render("comite-shell", { content: pagina });
});

app.get("/imprensa", function (sol, res) {
    pagina = {};
    pagina.title = "Imprensa";
    pagina.subtitle = [
        "Jornalismo até no Twitter:",
        "Mídia na era digital"
    ];

    pagina.paragraphs = [
        "O comitê “Jornalismo até no Twitter: Mídia na Era Digital” vem para cobrir todo o evento USPMUN e presentear os delegados com quatro dias sendo jornalistas que trabalham para grandes jornais: o The New York Times, o The Guardian e como não poderia faltar, o Nexo Jornal.",
        "Dentre os dias de simulação, os delegados se dividirão para cobrir os cinco comitês de debate, lembrando que comitês em inglês terão sua cobertura feita exclusivamente na língua estrangeira. Serão produzidos todos os dias: um texto sobre a situação do comitê, uma nota sobre alguma situação inédita do comitê e algum outro texto de gênero livre.",
        "A Imprensa também conta com outras atividades especiais que serão realizadas pelos próprios jornalistas: uma coletiva de imprensa com cada comitê e a produção de um telejornal!"
    ];

    pagina.diretores = [
        {
            nome: "Luana Rodrigues Gotardo",
            cargo: "Diretora acadêmica",
            descricao: [
                "Aspirante de escritora desde que se entende por gente, Luana é apaixonada por escrever e compartilhar histórias. Após experimentar o mundo de simulações, percebeu que, por mais que adorasse o ambiente dos MUNs, não se identificava na cena dos debates. Ao descobrir a imprensa na simulação interna de seu colégio, o ABACOONU, se estabeleceu sem intenções de abandonar o comitê: simulou em três anos consecutivos, um como jornalista, quando ganhou menção de melhor jornalista, e outras duas como diretora. Além disso, já participou da SiEM como membro da diretoria de intervenção.",
                "Atualmente, Luana cursa o segundo semestre de jornalismo na Faculdade Cásper Líbero, e busca uma imprensa de força, influência e qualidade. Essa é a primeira simulação universitária que participa, e está bastante feliz em participar da história da USPMUN na primeira imprensa e primeira mesa completamente feminina da simulação.",
                "Além disso, espera que os jornalistas aproveitem a experiência na simulação, e está bastante ansiosa em ver como eles lidarão com o comitê, ao trazer os debates realizados com os pontos de vista de suas representações jornalísticas."
            ]
        },
        {
            nome: "Larissa Mazzei de La Corte Machado",
            cargo: "Diretora assistente",
            descricao: [
                "Uma das inúmeras paixões de Larissa é compartilhar tudo o que gosta e a faz feliz com o mundo, talvez esse seja um dos motivos do porquê ela escolheu Jornalismo. Já a paixão por simulações começou um pouco antes, quando nem ela mesma sabia o que queria ser da vida. Foi arremessada no mundo de simulações aos 15 anos, na simulação interna de seu antigo colégio, a SICM, e depois dali não parou mais. Por dois anos consecutivos, seguiu como organizadora geral e diretora acadêmica da SICM. Entre 2016 e 2017, participou do comitê de imprensa do Fórum FAAP, conquistando menção honrosa e menção oral.",
                "Larissa decidiu cursar Jornalismo na Faculdade Cásper Líbero, fruto da realização que sentiu após participar de comitês de imprensa, e deseja que essa seja mais uma realização. Após o período de simulações do Ensino Médio, está pronta para participar de sua primeira simulação universitária e espera vivenciar, junto com os delegados, essa nova fase cheia de expectativas e dúvidas, que serão sanadas ao longo do processo. Deseja que o ambiente de simulação seja inclusivo, encorajador e desafiador, e garante que dará o seu melhor para isso acontecer e fará jus ao título de “primeira mesa completamente feminina”, fazendo história na USPMUN 2018."
            ]
        }
    ];

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
