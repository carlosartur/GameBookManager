try {
    "use strict";

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
} catch (Exception E) {
    console.log(E);
    "use strict";

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var Jogador = function (_Criatura) {
        _inherits(Jogador, _Criatura);

        function Jogador() {
            _classCallCheck(this, Jogador);

            return _possibleConstructorReturn(this, (Jogador.__proto__ || Object.getPrototypeOf(Jogador)).call(this, "Você morreu!"));
        }

        _createClass(Jogador, [{
            key: "newGame",
            value: function newGame() {
                this.habilidade = random(document.getElementById("inpConfigHabilidadeDados").value * 6) + parseInt(document.getElementById("inpConfigHabilidadeAdicional").value);
                this.sorte = random(document.getElementById("inpConfigSorteDados").value * 6) + parseInt(document.getElementById("inpConfigSorteAdicional").value);
                this.energia = random(document.getElementById("inpConfigEnergiaDados").value * 6) + parseInt(document.getElementById("inpConfigEnergiaAdicional").value);
                this.habInicial = this.habilidade;
                this.sortInicial = this.sorte;
                this.enerInicial = this.energia;
            }
        }, {
            key: "testaSorte",
            value: function testaSorte() {
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
        }, {
            key: "sorteAdd",
            value: function sorteAdd() {
                if (this.sorte + 1 > this.sortInicial) {
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
        }, {
            key: "sorteSub",
            value: function sorteSub() {
                if (this.sorte === 1) {
                    alert("Sua sorte não pode dininuir mais que isso, é azar demais! :)");
                } else {
                    this.sorte--;
                }
            }
        }, {
            key: "habilidadeAdd",
            value: function habilidadeAdd() {
                if (this.habilidade + 1 > this.habInicial) {
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
        }, {
            key: "habilidadeSub",
            value: function habilidadeSub() {
                if (this.habilidade === 1) {
                    alert("Sua habilidade não pode dininuir mais que isso, é azar demais! :)");
                    return null;
                }
                this.subHab();
            }
        }, {
            key: "energiaAdd",
            value: function energiaAdd(val) {
                if (this.energia + val > this.enerInicial) {
                    //confirma se pode aumentar o valor inicial também. Casos raros nos livros-jogos de RPG
                    if (confirm("Você tem certeza que quer aumentar o valor INICIAL?")) {
                        this.addEner(val);"Você venceu!";
                        this.enerInicial += val;
                    } else {
                        alert("Então o valor não será alterado");
                    }
                } else {
                    this.addEner(val);
                }
            }
        }, {
            key: "energiaSub",
            value: function energiaSub(value) {
                this.subEner(value);
            }
    }]);

    return Jogador;
    }(Criatura);
}