var corpo = document.body;
corpo.style.backgroundColor = 'black';
corpo.style.color = 'white';
corpo.style.fontFamily = 'Helvetica; Arial';
corpo.style.fontSize = '18px';

/*
Faça uma conta de Somar, Subtrair, Multiplicar e Dividir, utilizando os elementos GET e o HTML para digitar os dados.
*/ 

function resultadoSoma(){
    var numero1 = document.getElementById('primeiroAdi').value;
    var numero1Number = Number(numero1);
    var numero2 = document.getElementById('segundoAdi').value;
    var numero2Number = Number(numero2);
    var somaAdicao  = numero1Number + numero2Number;
    var resultadoAdi = document.getElementById('resultadoAdi');
    resultadoAdi.innerHTML = `O resultado da soma do primeiro ${numero1Number} e do segundo número: ${numero2Number} é = ${somaAdicao}`;
};


function resultadoSubtracao(){
    var numero1 = document.getElementById('primeiroSub').value;
    var numero1Number = Number(numero1);
    var numero2 = document.getElementById('segundoSub').value;
    var numero2Number = Number(numero2);
    var subtracao = numero1Number - numero2Number;
    var resultadoSub = document.getElementById('resultadoSub');
    resultadoSub.innerHTML = `O resultado do primeiro número: ${numero1Number} e do segundo número: ${numero2Number} é = ${subtracao}`;
};

function resultadoMultiplicacao(){
    var numero1 = document.getElementById('primeiroMul').value;
    var numero1Number = Number(numero1);
    var numero2 = document.getElementById('segundoMul').value;
    var numero2Number = Number(numero2);
    var multiplicacao = numero1Number * numero2Number;
    var resultadoMult = document.getElementById('resultadoMult');
    resultadoMult.innerHTML = `O resultado do primeiro ${numero1Number} e do segundo número: 
    ${numero2Number} é = ${multiplicacao}`;
};

function resultadoDivisao(){
    var numero1 = Number(document.getElementById('primeiroDiv').value);
    var numero2 = Number(document.getElementById('segundoDiv').value);
    var divisao = numero1 / numero2;
    var resultadoDiv = document.getElementById('resultadoDiv');
    resultadoDiv.innerHTML = `O resultado da divisão do primeiro número: ${numero1} e do segundo número: ${numero2} é = ${divisao}`;
};
