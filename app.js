var Expressao = "";
var Operador = false;
var Numeros = [];

function atualizarTela(info){
    document.getElementById("inputCalculadora").value = info;
}

function limparTela(){
    atualizarTela("");
    Numeros = [];
    Operador = "";
    Expressao = "";
    
}

function adicionarNumero(n) {
    Expressao += n;
    Numeros.push(n);
    Operador = false;
    atualizarTela(Expressao);
}

function adicionarPonto(){
    if (Numeros.includes(".") === false & Numeros.length > 0){
        Expressao += ".";
        Numeros.push(".");
        atualizarTela(Expressao);
    }
}

function adicionarOperador(operador){
    if (Operador === false){
        switch (operador){
            case "soma":
                Expressao += "+";
                break;
            case "subtracao":
                Expressao += "-";
                break;
            case "multiplicacao":
                Expressao += "*";
                break;
            case "divisao":
                 Expressao += "/";
                break;
        }
        Operador = true;
        Numeros = [];
        atualizarTela(Expressao);
    }
}

function consolidarOperacao(){
    atualizarTela(eval(Expressao));
}