var http = require("http");
var fs = require("fs");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");


app.use(express.static("./public"));
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

// app.get("/delegado", function (sol, res) {
//     pagina = {};
//     pagina.title = "Inscrição";

//     fs.readFile("./public/pages/inscricao-content.html", "utf-8", function (err, data) {
//         if (err) {
//             res.render("error-shell", { erro: err });
//         }
//         else {
//             pagina.body = data;
//             res.render("index-shell", { content: pagina });
//         }
//     });
// });

// app.get("/delegacao", function (sol, res) {
//     pagina = {};
//     pagina.title = "Inscrição";

//     fs.readFile("./public/pages/inscricao-content.html", "utf-8", function (err, data) {
//         if (err) {
//             res.render("error-shell", { erro: err });
//         }
//         else {
//             pagina.body = data;
//             res.render("index-shell", { content: pagina });
//         }
//     });
// });

app.get("/inscricoes", function (sol, res) {
    pagina = {};
    pagina.title = "Inscrições";

    fs.readFile("./public/pages/inscricoes-content.html", "utf-8", function (err, data) {
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

// app.get("/comiteSample", function (sol, res) {
//     pagina = {};
//     pagina.title = "OCA";

//     fs.readFile("./public/pages/comiteSample-content.html", "utf-8", function (err, data) {
//         if (err) {
//             res.render("error-shell", { erro: err });
//         }
//         else {
//             pagina.body = data;
//             res.render("index-shell", { content: pagina });
//         }
//     });
// });

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
        },
        {
            nome: "Verena Teles (Veva)",
            cargo: "Assistant Director",
            descricao: [
                "I am Verena Juliana Marigo Teles and I am 18 years old. I currently live in São Bernardo do Campo although I’ve spent most of my childhood in São Paulo and the majority of my family lives there. I hardly ever have some free time, but when I do I spend it reading comics and watching Brooklyn Nine-Nine !",
                "I’m a student of bachelor degrees in sciences and humanities in UFABC - Universidade Federal Do ABC - and I’m looking forwards to graduate in Foreign Relationships."
            ]
        },
        {
            nome: "Yuri Peggion",
            cargo: "Assistant Director",
            descricao: [
                "Hello world, how you doing? I’m Yuri de Oliveira Peggion, I am 18 years old and did also come from Sao Bernardo do Campo. My life motto is  \"know a little bit about everything, or at least try to\", that's because it's common enough for me to enter random conversations with random people, so I like to be prepared. On the other hand, my routine is pretty simple, I go to college at Universidade Federal do ABC (by the way, I study economics), I eat and sleep, probably more than I should; I usually spend good part of my day talking to my friends on discord, for that reason I learned how to double task a lot. To sum it all, I'm interested in pretty much everything, especially for History, Politics, Games, and Movies, hope we get along well!",
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
    pagina.subtitle = [
        "Apertem o cinto, privatizaram a Embraer:",
        "Negociações de venda da maior empresa aeronáutica da América Latina"
    ];

    pagina.paragraphs =[
        "Os anos 90 trouxeram grandes mudanças à economia brasileira, e as empresas estabelecidas no país entraram no jogo para sobreviver às dificuldades econômicas. Gigante do mercado aeronáutico internacional.",
        "Forte e consolidada no mercado mundial, a empresa se estabeleceu ao longo das décadas como uma empreitada de sucesso do Estado brasileiro. No entanto, a conjuntura política e econômica do Brasil trouxe à tona uma possibilidade para alavancar o potencial da Embraer: o fim do controle estatal em favor da privatização de suas atividades.",
        "No USPMUN, os delegados representantes deste comitê terão de lidar com os principais desafios da privatização e agir da melhor maneira possível para os interesses da empresa - , considerando obstáculos judiciais, estratégicos e econômicos que seriam vitais para a sobrevivência da Embraer em um setor fortemente competitivo e sedento por inovação. permearam a questão, O estabelecimento de visando sucedê-la, estabelecendo diretrizes positivas para o sucesso futuro da companhia será o principal objetivo, decidindo o quão disposto o governo brasileiro está em compartilhar deste tesouro nacional com o mundo.",
        "Neste comitê, os delegados terão de lidar com os principais desafios da privatização e agir da melhor maneira possível para os interesses da empresa - considerando obstáculos judiciais, estratégicos e econômicos que seriam vitais para a sobrevivência da Embraer em um setor fortemente competitivo e sedento por inovação. O estabelecimento de diretrizes positivas para o sucesso futuro da companhia será o principal objetivo, decidindo o quão disposto o governo brasileiro está em compartilhar deste tesouro nacional com o mundo."
    ];

    pagina.diretores = [
        {
            nome: "Eduardo Estivalete",
            cargo: "Diretor Acadêmico",
            descricao: [
                "Olá, pessoal! Meu nome é Eduardo Azevedo. Tenho 19 anos, e hoje curso direito (após 2 anos de engenharia). Moro na maior selva de pedra da América Latina, e não me imagino saindo daqui de novo tão cedo.",
                "Meu interesse pelo tema do comitê foi instantâneo: desde a minha paixão por máquinas até o meu profundo respeito pela referência internacional que a Embraer é na produção de aeronaves.",
                "Simulações fizeram (e continuam a fazer) uma parte importantíssima ao longo de minha vida acadêmica. Por meio de comitês como esse, eu espero que os delegados possam sentir a mesma magia que eu sinto ao discutir temas tão interessantes e relevantes para a sociedade atual.",
                "Espero ansiosamente pela participação de vocês nesse grandioso evento que é o USPMUN!"
            ]
        },
        {
            nome: "Pedro Alaminos",
            cargo: "Diretor Acadêmico",
            descricao: [
                "Olá! Meu nome é Pedro Alaminos Gonçalves, e atualmente sou aluno do 4º semestre de Direito na FGV-SP!",
                "Meu interesse por simulações em geral surgiu durante o ensino médio, quando amigos meus sugeriram que participasse. Com 5 anos de experiência em eventos do tipo, posso afirmar com toda a certeza que eles estão as principais fontes de desenvolvimento acadêmico com que tive contato.",
                "O tema do nosso comitê também é da maior importância: não só traz a reflexão do papel do Estado no desenvolvimento econômico de um país, como coloca os delegados como membros de alto escalão de uma das maiores empresas do país, fugindo com a \"mesmice\" de muitas simulações que só tratam do modelo Nações Unidas e trazendo maior compreensão do real funcionamento de grandes companhias.",
                "Espero contar com vocês nesse grande evento que é o USPMUN!"
            ]
        },
        {
            nome: "Amanda Lopes",
            cargo: "Diretora de Intervenção",
            descricao: [
                "Amanda Lopes é ingressante no curso de Engenharia Elétrica da Escola Politécnica da Universidade de São Paulo.",
                "Seu interesse pelas MUN's despertou no começo do ensino médio, quando foi apresentada a um projeto de simulação da região. Depois de participar de sua primeira MUN, com a ajuda de colegas ela estruturou um projeto para trazer as simulações para seu ambiente escolar, tendo realizado, com sucesso, a primeira edição em maio de 2017.",
                "Além da paixão pelos debates, Amanda divide seu tempo livre (escassíssimo nesse primeiro ano de poli) entre a prática de esportes, séries e ( festinhas ) outros projetos extracurriculares da universidade."
            ]
        },
        {
            nome: "Vinícius Amaral",
            cargo: "Diretor de Intervenção",
            descricao: [
                "Vinícius Amaral é estudante do primeiro ano de Engenharia Elétrica da Escola Politécnica da USP.",
                "Além de um comum calouro de engenharia, Vinícius compartilha do gosto por modelos de simulação da ONU, debates políticos e esportes. Seu lado afastado do mundo peculiar das ciências exatas se entrelaça com os domínios da arte e desfruta das belezas da fotografia, seja ela de campo ou estúdio.",
                "No que completa seu tempo livre, Vinícius admira um bom futebol e se aventura na simples porém fascinante culinária brasileira e desafia suas restritas habilidades na cozinha.",
                "Anteriormente, vivenciou experiências únicas participando como delegado em simulações externas e internas, e se empenhando durante 5 vezes na organização do Polionu, maior simulação estudantil da América Latina. Esse ano, contudo, espera ansiosamente recebê-los nesse incrível experiência que será o USPMUN 2018.",
            ]
        },
        {
            nome: "Filipe Penna",
            cargo: "Diretor de Intervenção",
            descricao: [
                "Filipe Penna. Penna. Peninha. Natural da capital do Vale São José dos Campos, tenho 18 anos e, ainda que paulista, encontro minhas raízes familiares e culturais em Minas, onde meu profundo amor, o Galo forte lutador, trava suas batalhas.",
                "Faço Poli, Engenharia Elétrica. Tento, também, fazer algumas outras coisas e com autenticidade, dedicação, um pouco de ironia e um bom senso de humor tento coordenar minha vida. Quase nunca no piloto automático, me inspiro em grandes referências pra continuar minha jornada como Elon Musk, Michael Faraday, Nikolas Tesla e Renan do Towner azul bebê.",
                "Minha paixão por simulações começou em 2015, quando tive minha primeira experiência com uma MUN. Venho diretamente do PoliONU, 3 anos depois, após de duas edições como Diretor nele, procurar oferecer uma nova experiência de simulação que eu espero que seja, pra mim e pros demais participantes, novamente inesquecível. Caso queira discutir comigo qualquer aspecto do comitê ou relacionado ao transporte alternativo brasileiro, sinta-se à vontade para enviar mensagens a filipe.penna.soares@gmail.com ou me procurar no Facebook."
            ]
        }
    ]

    res.render("comite-shell", { content: pagina });
});

app.get("/ce", function (sol, res) {
    pagina = {};
    pagina.title = "CE";
    pagina.subtitle = [
        "Xeque-mate do Artigo 50:",
        "O futuro das relações econômicas pós-Brexit e a questão da fronteira entre as Irlandas",
    ];

    pagina.paragraphs = [
        "Em 23 de Junho de 2016 a população britânica decidiu, em um histórico referendo, por separar seu país do maior bloco político-econômico de Estados já formado - a União Europeia.",
        "Contudo, a separação não é uma atitude simples de ser tomada. As realidades político-econômicas do Reino Unido e da União Europeia se encontram profundamente interligadas após décadas de União.",
        "A saída britânica do bloco europeu envolve, portanto, uma série de negociações para decidir sobre os mais diversos assuntos, desde o futuro das relações entre os dois entes, passando pela realocação de instituições do bloco instaladas nas Ilhas Britânicas, até a situação dos cidadãos europeus residentes no país e os cidadãos britânicos residentes na Europa Continental.",
        "O Comitê busca, por meio de discussões entre os delegados, buscar resoluções que possam guiar as negociações de saída do Reino Unido, priorizando os temas da futura relação econômica entre os atores e a questão da fronteira entre as Irlandas.",
    ];

    pagina.diretores = [
        {
            nome: "Matheus Rodrigues",
            cargo: "Diretor Assistente",
            descricao: [
                "​Hallo, Leute! Eu me chamo Matheus Rodrigues e terei o prazer de ser um dos Diretores do Conselho Europeu. Tenho 23 anos e estou no terceiro ano do curso de Relações Internacionais na Usp.",
                "Algumas informações importantes sobre minha pessoa: Costumo ser meio ranzinza à primeira vista e sou bem acanhado, mas juro que sou bem legal, então conversem comigo; tenho uma paixão não tão secreta por Video Games (Games Matter!); e sou apaixonado por cães.",
            ]
        },
        {
            nome: "Gabriel Rosas",
            cargo: "Diretor Assistente",
            descricao: [
                "Hello gente, meu nome é Gabriel Rosas, mais conhecido como Grosas, estou cursando o terceiro ano de Relações internacionais na USP. Tenho 22 anos com alma de 15 e coluna de 70.",
                "Famoso por meu pique eterno para roles e ideias duvidosas de diversão, serei diretor do comitê do CE. Gosto muito de música e odeio ficar sozinho.",
                "Para me definir em uma palavra, eu usaria comunicativo pois sempre estou conversando com as pessoas e fazendo novas amizades. #tamojunto",
            ]
        },
        {
            nome: "Laura Dantas",
            cargo: "Diretor Assistente",
            descricao: [
                "Oioi, sou a Laura Dantas, cursando segundo ano de RI, tenho 19 anos, e sou diretora do CE.",
                "Adoro uma festinha viu? Mas mais que isso, sair com os friends.",
                "Serei diretora pela primeira vez e vai ser bem bacana.",
                "No tempo livre, em casa, é netflix mesmo, o básico (mas eu nunca to em casa)",
                "Espero vocês no comitê! #pas",
            ]
        }
    ];

    res.render("comite-shell", { content: pagina });
});

app.get("/oea", function (sol, res) {
    pagina = {};
    pagina.title = "OEA";
    pagina.subtitle = [
        "Una nación, múltiples problemas:",
        "A crise migratória da Venezuela e as discussões sobre a suspensão da República Bolivariana da Venezuela"
    ];

    pagina.paragraphs = [
        "A Organização dos Estados Americanos é o principal órgão para integração continental nas Américas. Ela integra todos os países independentes do território americano e toma decisões de caráter recomendatório. Hoje, a OEA congrega os 35 Estados independentes das Américas e constitui o principal fórum governamental político, jurídico e social do Hemisfério. Fundada em 1948, ela comemora, este ano, seu octagésimo aniversário. A Organização foi criada para alcançar nos Estados membros, como estipula o Artigo 1º da Carta, “uma ordem de paz e de justiça, para promover sua solidariedade, intensificar sua colaboração e defender sua soberania, sua integridade territorial e sua independência”.",
        "O comitê tratará sobre a questão da crise imigratória que atualmente atinge a Venezuela, com milhares de venezuelanos deixando o país por mês. A nação vive um cenário sem perspectivas, onde o governo cortou programas sociais, a inflação nas alturas e rotina de escassez de alimentos e medicamentos. As discussões a respeito de suspender a República Bolivariana da Venezuela de sua posição na OEA também entrarão em pauta, pelos indícios de infração de direitos humanos e regras do órgão. As tarefas no comitê são muitas e variadas, cabendo aos delegados encaminhar medidas que possam cessar a tensão diplomática e instabilidade imigratória."
    ];

    pagina.diretores = [
        {
            nome: "Amanda Louzada",
            cargo: "Diretora Acadêmica",
            descricao: [
                "Amanda Louzada, ou só (L)ouzada mesmo, faz letras na USP e não sabe se escolhe sua habilitação em Alemão ou Russo. Apesar de estudar na famosa FFLCH, jura que nunca usou drogas (na mesma). A aquariana já passou por todas as fases que um modeleiro pode passar, desde estresse total como Secretária, até uma Narcotraficante da Colômbia. Conhecida como golpista nas simulações, ela sempre dá um jeitinho de agitar todos os comitês que participa, mas promete se comportar em mais uma de suas experiências como diretora. Amante de livros e diplomacia, seu maior sonho é ser poliglota, o resto só vem. Fez teatro musical sua vida inteira, então estejam preparados para invenções tops."
            ]
        },
        {
            nome: "Anna Júlia",
            cargo: "Diretora Assistente",
            descricao: [
                "Anna é uma pseudo comunista que está se achando, pois iniciou seus estudos em direito na USP em 2018. Vale dizer que é uma garota prendada, chata, às vezes simpática, maluca, ansiosa e que ama política e pessoas engajadas. Apesar de ser uma amante de memes, descobrirão, em breve, que a graça não é seu forte, e por isso essa introdução não está sendo escrita por ela, mas sim pela sua fã número 1. Geralmente não presta atenção no que os outros falam, porém, por incrível que pareça, tem o superpoder de focar dentro de uma sala de comitê. Talvez seja por conta dessa vantagem apelona sobre os meros mortais que obteve vitoriosas experiências no ramo das simulações. A leonina promete não deixar que sua teimosia afete a vivência de vocês jornalistas. Entretanto, não deixem de ser cautelosos perto dela, já que seu ascendente é em escorpião e ela pode ser facilmente irritada."
            ]
        },
        {
            nome: "Bruno Fiorelli",
            cargo: "Diretor Assistente",
            descricao: [
                "Bruno Fiorelli é um indivíduo viciado em simulações. Geógrafo da USP e exímio duelista de Yu-Gi-Oh (quem quiser duelar é só chamar para um x1), seu objetivo de vida sempre foi pegar todos os 151 pokémons e tornar-se o melhor treinador da região de Kanto. Mesmo sendo um crianção, ainda considera importantíssima a participação e engajamento de pessoas e jovens com este tipo de atividade, além de perceber o quanto as pessoas podem mudar e inspirar os outros! Bruno também pode ser conhecido como “Mr. Fórum” e futuramente poderá ser avistado em seu habitat natural, as outras simulações de São Paulo."
            ]
        },
        {
            nome: "Ítalo Martins",
            cargo: "Diretor Assistente",
            descricao: [
                "Ítalo Martins tem 18 anos e cursa o primeiro semestre de Direito na USP. É amante inveterado de política e intrigas e, por conseguinte, de House of Cards e simulações nas quais já participou em torno de 15 vezes, já tendo perdido a conta. Apesar de se caracterizar como um ser calmo em seu habitat natural, não hesita em encarnar o deus nórdico quando do manuseio do malhete. Cético da inviolabilidade da teoria astrológica dos signos, por meio dessa apresentação convoca os experts para um bolão na tentativa de acertar o seu signo. Sua fala nas sessões, normalmente mais sóbria e formal há de oferecer risadas diversas ao longo do desenrolar do comitê em momentos de necessária descontração cômica."
            ]
        },
        {
            nome: "Mariana Rocha",
            cargo: "Diretora Assistente",
            descricao: [
                "Mariana Rocha é a famosa mãezona do rolê, apesar de ainda ser, no quesito idade, um bebê. Estudante de Psicologia do -não tão- famigerado IPUSP, é apaixonada por ajudar as pessoas (chama no probleminha pra falar de probleminhas, bb) e possui uma das maiores coleções de meme que o mundo já viu. Começou a simular aos 14 anos e, como qualquer viciada que se preze, sempre diz que vai parar (\"é minha simulação de despedida\", diz ela há dois anos). Vê os fóruns como boas oportunidades de aprender a dialogar e, principalmente, de aprender a escutar o outro. Espera que todos tenham uma ótima experiência no USPMUN!"
            ]
        }
    ];

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
