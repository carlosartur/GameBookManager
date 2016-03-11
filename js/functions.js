"use strict";

var selectGame,
    canWriteHTML5Storage,
    inpEnergia,
    inpSorte,
    inpHabilidade,
    inpAnotacoes,
    inpHabilidadeInimigo,
    inpEnergiaInimigo,
    inpDadoNum,
    inpConfigTomaDano,
    inpConfigProvocaDano,
    inpConfigSorteDados,
    inpConfigSorteAdicional,
    inpConfigHabilidadeDados,
    inpConfigHabilidadeAdicional,
    inpConfigEnergiaDados,
    inpConfigEnergiaAdicional,
    player = new Jogador();
events();

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

    inpConfigTomaDano.value = gameData["configuracoes"]["inpConfigTomaDano"]
    inpConfigProvocaDano.value = gameData["configuracoes"]["inpConfigProvocaDano"]
    inpConfigSorteDados.value = gameData["configuracoes"]["inpConfigSorteDados"]
    inpConfigSorteAdicional.value = gameData["configuracoes"]["inpConfigSorteAdicional"]
    inpConfigHabilidadeDados.value = gameData["configuracoes"]["inpConfigHabilidadeDados"]
    inpConfigHabilidadeAdicional.value = gameData["configuracoes"]["inpConfigHabilidadeAdicional"]
    inpConfigEnergiaDados.value = gameData["configuracoes"]["inpConfigEnergiaDados"]
    inpConfigEnergiaAdicional.value = gameData["configuracoes"]["inpConfigEnergiaAdicional"]
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
        "anotacoes": inpAnotacoes.value,
        "configuracoes": {
            "inpConfigTomaDano": inpConfigTomaDano.value,
            "inpConfigProvocaDano": inpConfigProvocaDano.value,
            "inpConfigSorteDados": inpConfigSorteDados.value,
            "inpConfigSorteAdicional": inpConfigSorteAdicional.value,
            "inpConfigHabilidadeDados": inpConfigHabilidadeDados.value,
            "inpConfigHabilidadeAdicional": inpConfigHabilidadeAdicional.value,
            "inpConfigEnergiaDados": inpConfigEnergiaDados.value,
            "inpConfigEnergiaAdicional": inpConfigEnergiaAdicional.value
        }
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

function events() {
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

    inpConfigTomaDano = document.getElementById("inpConfigTomaDano");
    inpConfigProvocaDano = document.getElementById("inpConfigProvocaDano");
    inpConfigSorteDados = document.getElementById("inpConfigSorteDados");
    inpConfigSorteAdicional = document.getElementById("inpConfigSorteAdicional");
    inpConfigHabilidadeDados = document.getElementById("inpConfigHabilidadeDados");
    inpConfigHabilidadeAdicional = document.getElementById("inpConfigHabilidadeAdicional");
    inpConfigEnergiaDados = document.getElementById("inpConfigEnergiaDados");
    inpConfigEnergiaAdicional = document.getElementById("inpConfigEnergiaAdicional");

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
        var div = document.querySelector('#dados');
        div.innerHTML = '';
        for (var i = 1; i <= inpDadoNum.value; i++) {
            var div_to_insert = document.createElement('div');

            div_to_insert.style = 'margin:10px; height:50px; width:50px; border-style:solid; border-color:"#000"; text-align:center;';
            div_to_insert.innerHTML = '<h4>' + random(6) + '</h4>';
            div.appendChild(div_to_insert);
        }
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

        while (player.energia > 0 && monstro.energia > 0) {
            var ataquePlayer = player.ataque();
            var ataqueMonstro = monstro.ataque();
            var dano = 0;
            var mensagem = "Seu ataque: " + ataquePlayer + "\nAtaque inimigo: " + ataqueMonstro;

            if (ataqueMonstro === ataquePlayer) {
                alert(mensagem + "\nNeste turno, ninguém toma dano.");
            } else {

                if (ataqueMonstro > ataquePlayer) {
                    alert(mensagem + "\nVocê toma dano!");
                    dano = document.getElementById("configReducaoEnergiaPersonagem").value;

                    if (confirm("Deseja testar sua sorte, para tentar minimizar seu ferimento?")) {
                        if (!player.testaSorte()) {
                            dano++;
                        } else {
                            dano--;
                        }
                    }
                    player.energiaSub(dano);

                } else {
                    alert(mensagem + "\nVocê feriu o seu inimigo!");
                    dano = document.getElementById("configReducaoEnergiaInimigo").value;

                    if (confirm("Deseja testar sua sorte, para tentar ferir mais ainda seu inimigo?")) {
                        //se for sortudo, tem dois pontos extras de energia a tirar do inimigo
                        if (player.testaSorte()) {
                            dano++;
                        } else {
                            dano--;
                        }
                    }
                    monstro.subEner(dano);
                }
            }
            //pergunta se não quer fugir, tira mais dois de dano, mas encerra a luta
            if (confirm("Em alguns casos, lhe é dada a possibilidade de fugir de uma luta. Você quer (e pode) fugir?")) {
                player.energiaSub(getElementById("configReducaoEnergiaPersonagem").value);
                monstro.energia = 0;
            }
            //tem que ser executado de qualquer maneira, então fica fora dos ifs
            inpSorte.value = player.sorte;
            inpEnergia.value = player.energia > 0 ? player.energia : 0;
            inpEnergiaInimigo.value = monstro.energia > 0 ? monstro.energia : 0;
        }
    };
};
