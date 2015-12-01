"use strict";
var canWriteHTML5Storage;
var inpEnergia;
var inpSorte;
var inpHabilidade;
var inpAnotacoes;
var inpHabilidadeInimigo;
var inpEnergiaInimigo;

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
            alert(this.mensagemMorte);
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
    player.energia = localStorage.getItem("energia");
    player.enerInicial = localStorage.getItem("energiaInicial");
    player.habilidade = localStorage.getItem("habilidade");
    player.habInicial = localStorage.getItem("habilidadeInicial");
    player.sorte = localStorage.getItem("sorte");
    player.sortInicial = localStorage.getItem("sortInicial");
    inpAnotacoes.value = localStorage.getItem("anotacoes");
    inpEnergia.value = player.energia;
    inpHabilidade.value = player.habilidade;
    inpSorte.value = player.sorte;
}

function saveData() {
    localStorage.setItem("energia", player.energia);
    localStorage.setItem("energiaInicial", player.enerInicial);
    localStorage.setItem("habilidade", player.habilidade);
    localStorage.setItem("habilidadeInicial", player.habInicial);
    localStorage.setItem("sorte", player.sorte);
    localStorage.setItem("sortInicial", player.sortInicial);
    localStorage.setItem("anotacoes", inpAnotacoes.value);
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
    loadData();
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
    //click dos botões
    btnSaveGame.onclick = function() {
        saveData();
    };
    btnDado.onclick = function() {
        inpDado.value = random(6);
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
            inpEnergia.value = player.energia > 0 ? player.energia : 0;
            inpEnergiaInimigo.value = monstro.energia > 0 ? monstro.energia : 0;
        }
    };
};
