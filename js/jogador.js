class Jogador extends Criatura {

    constructor (){
        super("Você morreu!");
    }

    newGame() {
        this.habilidade = random(document.getElementById("inpConfigHabilidadeDados").value * 6) + parseInt(document.getElementById("inpConfigHabilidadeAdicional").value);
        this.sorte = random(document.getElementById("inpConfigSorteDados").value * 6) + parseInt(document.getElementById("inpConfigSorteAdicional").value);
        this.energia = random(document.getElementById("inpConfigEnergiaDados").value * 6) + parseInt(document.getElementById("inpConfigEnergiaAdicional").value);
        this.habInicial = this.habilidade;
        this.sortInicial = this.sorte;
        this.enerInicial = this.energia;
    }

    testaSorte () {
        if (this.sorte < 2) {
            alert("Com sorte menor que 2, o resultado será sempre azarado.");
            return false;
        }
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