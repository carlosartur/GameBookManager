"use strict";

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
