"use strict";

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
