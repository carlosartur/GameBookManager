try {
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
} catch (Exception E) {
    console.log(E);
    "use strict";

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Criatura = function () {
        function Criatura(mensagemMorte) {
            _classCallCheck(this, Criatura);

            this.mensagemMorte = mensagemMorte;
        }

        _createClass(Criatura, [{
            key: "addHabi",
            value: function addHabi() {
                this.habilidade++;
            }
        }, {
            key: "subHab",
            value: function subHab() {
                if (this.habilidade <= 1) {
                    alert("A habilidade não pode ser menor que 1.");
                    return false;
                } else {
                    this.habilidade--;
                    return true;
                }
            }
        }, {
            key: "addEner",
            value: function addEner(add) {
                this.energia += add;
            }
        }, {
            key: "subEner",
            value: function subEner(sub) {
                if (this.energia <= 0) {
                    alet(this.mensagemMorte);
                    return false;
                } else {
                    this.energia -= sub;
                    return true;
                }
            }
        }, {
            key: "ataque",
            value: function ataque() {
                return this.habilidade * 1 + random(11) + 1;
            }
        }]);

        return Criatura;
    }();
}