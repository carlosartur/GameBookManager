"use strict";
var selectGame;
var canWriteHTML5Storage;
var inpEnergia;
var inpSorte;
var inpHabilidade;
var inpAnotacoes;
var inpHabilidadeInimigo;
var inpEnergiaInimigo;
var inpDadoNum;

class Criatura {
    constructor (mensagemMorte) {
        this.mensagemMorte = mensagemMorte;
    }

    addHabi () {
        this.habilidade++;
    }

    subHab () {
        if (this.habilidade <= 1) {
            alert("A habilidade não pode ser menor que 1.");
            return false;
        } else {
            this.habilidade--;
            return true;
        }
    }

    addEner (add) {
        this.energia += add;
    }

    subEner (sub) {
        if (this.energia <= 0) {
            alet(this.mensagemMorte);
            return false;
        } else {
            this.energia -= sub;
            return true;
        }
    }

    ataque () {
        return (this.habilidade * 1) + random(11) + 1;
    };
}

class Jogador extends Criatura {
    constructor (){
        super("Você morreu!");
    }

    newGame() {
        this.habilidade = random(6) + 6;
        this.sorte = random(6) + 6;
        this.energia = random(11) + 7;
        this.habInicial = this.habilidade;
        this.sortInicial = this.sorte;
        this.enerInicial = this.energia;
    }

    testaSorte () {
        var testar = random(11) + 1;
        var result;
        if (testar > this.sorte) {
            alert("Você foi azarado.");
            result = false;
        } else {
            alert("Você foi sortudo.");
            result = true;
        }
        this.sorte--;
        return result;
    }

    sorteAdd () {
        if ((this.sorte + 1) > this.sortInicial) {
            //confirma se pode aumentar o valor inicial também. Casos raros nos livros-jogos de RPG
            if (confirm("Você tem certeza que quer aumentar o valor INICIAL?")) {
                this.sorte++;
                this.sortInicial++;
            } else {
                alert("Então o valor não será alterado");
            }
        } else {
            this.sorte++;
        }
    }

    sorteSub () {
        if (this.sorte === 1) {
            alert("Sua sorte não pode dininuir mais que isso, é azar demais! :)");
        } else {
            this.sorte--;
        }
    }

    habilidadeAdd () {
        if ((this.habilidade + 1) > this.habInicial) {
            //confirma se pode aumentar o valor inicial também. Casos raros nos livros-jogos de RPG
            if (confirm("Você tem certeza que quer aumentar o valor INICIAL?")) {
                this.addHabi();
                this.habInicial++;
            } else {
                alert("Então o valor não será alterado");
            }
        } else {
            this.addHabi();
        }
    }

    habilidadeSub () {
        if (this.habilidade === 1) {
            alert("Sua habilidade não pode dininuir mais que isso, é azar demais! :)");
            return null;
        }
        this.subHab();
    }

    energiaAdd (val) {
        if ((this.energia + val) > this.enerInicial) {
            //confirma se pode aumentar o valor inicial também. Casos raros nos livros-jogos de RPG
            if (confirm("Você tem certeza que quer aumentar o valor INICIAL?")) {
                this.addEner(val);"Você venceu!"
                this.enerInicial += val;
            } else {
                alert("Então o valor não será alterado");
            }
        } else {
            this.addEner(val);
        }
    }

    energiaSub (value) {
        this.subEner(value);
    }
}

var player = new Jogador();

class Monstro extends Criatura{
    constructor(energia, habilidade) {
        super("Você morreu!");
        this.energia = energia;
        this.habilidade = habilidade;
    }
}

function random(max) {
    return Math.floor(Math.random() * max + 1);
}

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function loadData() {

    var selectedGame = getSelectedGame();
    if (selectedGame == 0 || selectedGame == '') {
        alert('Por favor, selecione um jogo');
        return false;
    }

    var jsonSlot = localStorage.getItem('savedGames');
    if (jsonSlot == '' || typeof jsonSlot == undefined) {
        alert('Ainda não há jogos salvos');
        return false;
    }
    var gameSlot = JSON.parse(jsonSlot);
    var gameData = gameSlot[selectedGame];
    player.energia = gameData["energia"];
    player.enerInicial = gameData["energiaInicial"];
    player.habilidade = gameData["habilidade"];
    player.habInicial = gameData["habilidadeInicial"];
    player.sorte = gameData["sorte"];
    player.sortInicial = gameData["sortInicial"];
    inpAnotacoes.value = gameData["anotacoes"];
    inpEnergia.value = player.energia;
    inpHabilidade.value = player.habilidade;
    inpSorte.value = player.sorte;
}

function saveData() {
    var selectedGame = getSelectedGame();
    if (selectedGame == 0 || selectedGame === null || typeof selectedGame == 'undefined') {
        var nameGame = prompt('Nome do jogo:');
        if (nameGame == '' || nameGame === null || typeof nameGame == 'undefined') {
            alert('O jogo não será salvo. Dê um nome para ele, para poder salvar');
            return null;
        }
    } else {
        var nameGame = selectGame.value;
    }
    var toSave = {
        "energia": player.energia,
        "energiaInicial": player.enerInicial,
        "habilidade": player.habilidade,
        "habilidadeInicial":player.habInicial,
        "sorte": player.sorte,
        "sortInicial": player.sortInicial,
        "anotacoes": inpAnotacoes.value
    };

    var jsonSlot = localStorage.getItem('savedGames');
    if (jsonSlot == '' || typeof jsonSlot == 'undefined' || jsonSlot == null) {
        jsonSlot = '{}';
    }

    var gameSlot = JSON.parse(jsonSlot);
    gameSlot[nameGame] = toSave;
    localStorage.setItem('savedGames', JSON.stringify(gameSlot));
    fillSelect();
}

function getSelectedGame () {
    return selectGame.options[selectGame.selectedIndex].value;
}

function fillSelect () {
    var jsonSlot = localStorage.getItem('savedGames');
    if (jsonSlot == '') {
        jsonSlot = '{}';
    }

    var gameSlot = JSON.parse(jsonSlot);
    fillS: for (var i in gameSlot) {
        for (var j in selectGame.options) {
            if (selectGame.options[j].value == i) {
                continue fillS;
            }
        }
        selectGame.options[selectGame.options.length] = new Option(i, i);
    }
}

function drainOut() {
    if (confirm('Essa ação vai apagar todos os dados salvos de todos os jogos, tem certeza que quer cotinuar?')) {
        localStorage.setItem('savedGames', '{}');
        location.reload();
    }
}

window.onload = function() {
    canWriteHTML5Storage = supportsLocalStorage();
    //seta os inputs
    inpEnergia = document.getElementById("energia");
    inpSorte = document.getElementById("sorte");
    inpHabilidade = document.getElementById("habilidade");
    inpAnotacoes = document.getElementById("anotacoes");
    inpEnergiaInimigo = document.getElementById("energiaInimigo");
    inpHabilidadeInimigo = document.getElementById("habilidadeInimigo");
    inpDadoNum = document.getElementById("dadoNum");
    selectGame = document.getElementById("gameList");

    //botões +1
    var btnEnergiaPP = document.getElementById("energiaPP");
    var btnSortePP = document.getElementById("sortePP");
    var btnHabilidadePP = document.getElementById("habilidadePP");
    //botões -1
    var btnEnergiaMM = document.getElementById("energiaMM");
    var btnSorteMM = document.getElementById("sorteMM");
    var btnHabilidadeMM = document.getElementById("habilidadeMM");
    //dado
    var inpDado = document.getElementById("dado");
    var btnDado = document.getElementById("dadoBtn");
    //new game
    var btnNew = document.getElementById("newGame");
    var btnLutar = document.getElementById("ataque");
    var btnSaveGame = document.getElementById("saveGame");

    var btnLoadGame = document.getElementById("loadGame");

    var btnTestarSorte = document.getElementById("testarSorte");
    var btnDeleteAllGames = document.getElementById("drainOut");
    fillSelect();

    btnDeleteAllGames.onclick = function () {
        drainOut();
    }

    btnLoadGame.onclick = function () {
        loadData();
    }

    btnTestarSorte.onclick = function() {
      player.testaSorte();
      inpSorte.value = player.sorte;
    }
    //click dos botões
    btnSaveGame.onclick = function() {
        saveData();
    };
    btnDado.onclick = function() {
        var print = '';
        var numDados = inpDadoNum.value;
        for (var i = 1; i <= inpDadoNum.value; i++) {
            print += i + " : " + random(6) + " - ";
        }
        inpDado.value = print;
    };
    btnNew.onclick = function() {
        player.newGame();
        inpAnotacoes.value = '';
        inpEnergia.value = player.energia;
        inpSorte.value = player.sorte;
        inpHabilidade.value = player.habilidade;
        saveData();
    };
    btnEnergiaPP.onclick = function() {
        player.energiaAdd(1);
        inpEnergia.value = player.energia;
    };
    btnEnergiaMM.onclick = function() {
        player.energiaSub(1);
        inpEnergia.value = player.energia;
    };
    btnHabilidadePP.onclick = function() {
        player.habilidadeAdd();
        inpHabilidade.value = player.habilidade;
    };
    btnHabilidadeMM.onclick = function() {
        player.habilidadeSub();
        inpHabilidade.value = player.habilidade;
    };
    btnSortePP.onclick = function() {
        player.sorteAdd();
        inpSorte.value = player.sorte;
    };
    btnSorteMM.onclick = function() {
        player.sorteSub();
        inpSorte.value = player.sorte;
    };
    btnLutar.onclick = function() {
        var monstro = new Monstro(inpEnergiaInimigo.value, inpHabilidadeInimigo.value);
        //percorre enquanto os dois viverem.
        while (player.energia > 0 && monstro.energia > 0) {
            var ataquePlayer = player.ataque();
            var ataqueMonstro = monstro.ataque();
            var dano = 0;
            //se ataques forem iguais, ninguem toma dano.
            if (ataqueMonstro === ataquePlayer) {
                alert("Neste turno, ninguém toma dano.");
            } else {
                //monstro ganha turno
                if (ataqueMonstro > ataquePlayer) {
                    alert("Você toma dano!");
                    dano = 1;
                    //testa sorte para tentar minimizar o ferimento
                    if (confirm("Deseja testar sua sorte, para tentar minimizar seu ferimento?")) {
                        //se for azarado, tem 2 pontos extras de energia tirados, totalizando 3.
                        if (!player.testaSorte()) {
                            dano = 3;
                        }
                    }
                    //se respondeu que não quer testar sorte, toma 2 pontos de dano padrão
                    else {
                        dano = 2;
                    }
                    player.energiaSub(dano);
                } else {
                    alert("Você feriu o seu inimigo!");
                    dano = 1;
                    if (confirm("Deseja testar sua sorte, para tentar ferir mais ainda seu inimigo?")) {
                        //se for sortudo, tem dois pontos extras de energia a tirar do inimigo
                        if (player.testaSorte()) {
                            dano = 3;
                        }
                    }
                    //se não quer testar sorte, 2 pontos de energia padrão
                    else {
                        dano = 2;
                    }
                    monstro.subEner(dano);
                }
            }
            //pergunta se não quer fugir, tira mais dois de dano, mas encerra a luta
            if (confirm("Em alguns casos, lhe é dada a possibilidade de fugir de uma luta. Você quer (e pode) fugir?")) {
                player.energiaSub(2);
                monstro.energia = 0;
            }
            //tem que ser executado de qualquer maneira, então fica fora dos ifs
            inpSorte.value = player.sorte;
            inpEnergia.value = player.energia > 0 ? player.energia : 0;
            inpEnergiaInimigo.value = monstro.energia > 0 ? monstro.energia : 0;
        }
    };
};
