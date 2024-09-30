var Expressao = "";
var Operador = false;
var Numeros = [];

function atualizarTela(info){
    document.getElementById("inputCalculadora").value = info;
}

function adicionarNumero(n) {
    Expressao += n;
    Numeros.push(n);
    Operador = false;
    atualizarTela(Expressao);
}

const button1 = document.getElementById("button1");
button1.addEventListener("click", function(){
    adicionarNumero(1);
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function(){
    adicionarNumero(2);
});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function(){
    adicionarNumero(3);
});

const button4 = document.getElementById("button4");
button4.addEventListener("click", function(){
    adicionarNumero(4);
});

const button5 = document.getElementById("button5");
button5.addEventListener("click", function(){
    adicionarNumero(5);
});

const button6 = document.getElementById("button6");
button6.addEventListener("click", function(){
    adicionarNumero(6);
});

const button7 = document.getElementById("button7");
button7.addEventListener("click", function(){
    adicionarNumero(7);
});

const button8 = document.getElementById("button8");
button8.addEventListener("click", function(){
    adicionarNumero(8);
});

const button9 = document.getElementById("button9");
button9.addEventListener("click", function(){
    adicionarNumero(9);
});

const button0 = document.getElementById("button0");
button0.addEventListener("click", function(){
    adicionarNumero(0);
});

function limparTela(){
    atualizarTela("");
    Numeros = [];
    Operador = "";
    Expressao = "";
};

const buttonC = document.getElementById("buttonC");
buttonC.addEventListener("click", limparTela);


function adicionarPonto(){
    if (Numeros.includes(".") === false & Numeros.length > 0){
        Expressao += ".";
        Numeros.push(".");
        atualizarTela(Expressao);
    };
};

const buttonPonto = document.getElementById("buttonPonto");
buttonPonto.addEventListener("click", adicionarPonto);

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
    };
};

const buttonDiv = document.getElementById("buttonDiv");
buttonDiv.addEventListener("click", function(){
    adicionarOperador("divisao");
});

const buttonMul = document.getElementById("buttonMul");
buttonMul.addEventListener("click", function(){
    adicionarOperador("multiplicacao");
});

const buttonMenos = document.getElementById("buttonMenos");
buttonMenos.addEventListener("click", function(){
    adicionarOperador("subtracao");
});

const buttonMais = document.getElementById("buttonMais");
buttonMais.addEventListener("click", function(){
    adicionarOperador("soma");
});

function consolidarOperacao(){
    atualizarTela(eval(Expressao));
}

const buttonIgual = document.getElementById("buttonIgual");
buttonIgual.addEventListener("click" ,consolidarOperacao);