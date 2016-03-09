"use strict";

var files = [
    'criatura',
    'jogador',
    'monstro',
    'functions'
];

window.onload = function () {
    var template = 'js/{script}.js';
    for (var i in files) {
        var body = document.querySelector('body');

        var script_to_insert = document.createElement('script');
        script_to_insert.type = 'text/javascript';
        script_to_insert.src = template.split('{script}').join(files[i]);

        body.appendChild(script_to_insert);
    }
};
