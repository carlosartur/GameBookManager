try {
	"use strict";

	class Monstro extends Criatura{
	    constructor(energia, habilidade) {
	        super("Você morreu!");
	        this.energia = energia;
	        this.habilidade = habilidade;
	    }
	}
} catch (Exception E) {
	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Monstro = function (_Criatura) {
	    _inherits(Monstro, _Criatura);

	    function Monstro(energia, habilidade) {
	        _classCallCheck(this, Monstro);

	        var _this = _possibleConstructorReturn(this, (Monstro.__proto__ || Object.getPrototypeOf(Monstro)).call(this, "Você morreu!"));

	        _this.energia = energia;
	        _this.habilidade = habilidade;
	        return _this;
	    }

	    return Monstro;
	}(Criatura);
}