

//1. Par ou Ímpar
//Peça um número ao usuário e exiba se ele é par ou ímpar.

console.log("-Exercicio 1");

var par_impar = prompt("Me diga um número: ");
var resultado = parseInt(par_impar) % 2;
if (resultado == 0) {
    console.log("O número escolhido é par.");
} else{
    console.log("O número escolhido é impar.");
}

//2. Verificação de Maioridade
//Solicite a idade do usuário e informe se ele é maior de idade (18 anos ou mais) ou menor de idade.

console.log("-Exercicio 2");

var idade = prompt("Qual é o seu idade?");
if (idade < 18) {
    console.log("Você é menor de idade");
} else{
    console.log("Você é maior de idade");
}

//3. Contagem de 1 a 10
//Exiba os números de 1 a 10 no console usando um laço for.

console.log("-Exercicio 3");

for (var i = 0; i < 11; i++){
    console.log(i)
}

//4. Contagem Regressiva
//Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.

console.log("-Exercicio 4");

var numero2 = prompt("Me diga um número para gerar uma ordem decrescente:");
while (numero2>-1){
    console.log(numero2);
    numero2--;

}
//5. Tabuada
//Peça um número e exiba a tabuada de 1 a 10 usando um laço for.

console.log("-Exercicio 5");

var numero3 = prompt("Me diga um número para mostra sua tabuada:");
for (var m = 1; m <11; m++){
    mult = numero3 * m;
    console.log(mult);
}

//6. Somatório
//Solicite um número e some todos os números de 1 até ele. 

console.log("-Exercício 6");

var numero4 = prompt("Me diga um número:");
var limite = parseInt(numero4);
var soma = 0;

for (var m = 1; m <= limite; m++) {
    soma = soma + m; 
    console.log(m);
}
//7. Número Primo
//Peça um número ao usuário e informe se ele é primo ou não.

console.log("-Exercício 7");

var numero5 = parseInt(prompt("Digite um número para verificar se é primo:"));
var primo = true;

if (numero5 < 2) {
    primo = false;
} else {
    for (var i = 2; i < numero5; i++) {
        if (numero5 % i === 0) {
            primo = false;
            break; 
        }
    }
}
if (primo) {
    console.log(numero5 + " é um número primo! ");
} else {
    console.log(numero5 + " não é primo. ");
}

//8. Login Simples
//Peça ao usuário um nome de usuário e uma senha. Se ele errar, peça novamente até acertar.

console.log("-Exercício 8");

var usuariocerto = prompt("Digite um Nome de usuario:");
var senhacerta = prompt("Digite uma senha");

while(true){
    var nome = prompt("Digite o nome para logar:");
    var senha = prompt("Digite a senha para logar:");
    if (nome == usuariocerto) {
        if(senha == senhacerta){
            console.log("Usuario logado com sucesso")
            break
        }
    }

    else{
        console.log("Tente novamente")
    }
}

//9. Soma de Números Positivos
//Peça ao usuário vários números e some-os até que ele digite um número negativo, então exiba o total.

var somatotal = 0;
var continuar = true;

while (continuar) {
    var numero6 = parseInt(prompt("digite um número para somar ou um número negativo para sair:"));

    if (numero6 < 0) {
        continuar = false; 
    } else {
        somatotal += numero6;
        console.log("Soma atual: " + somatotal);
    }
}

console.log("O total da soma é: " + somatotal);


//10. Adivinhação
//Escolha um número aleatório de 1 a 10 e peça ao usuário para adivinhar. Dê dicas até ele acertar.

console.log("-Exercício 10");

var numerosecreto = 7;
var chute;

console.log("adivinhe o número que eu estou pensando de 1 a 10!");

while (chute != numerosecreto) {
    chute = parseInt(prompt("Qual o seu chute?"));

    if (chute > numeroSecreto) {
        console.log("alto demais! tente um número menor");
    } else if (chute < numeroSecreto) {
        console.log("baixo demais! tente um número maior");
    } else if (chute == numeroSecreto) {
        console.log("ok! você acertou, o número era " + numerosecreto);
    } else {
        console.log("valor inválido digite um número");
    }
}

//11. Cálculo de Fatorial
//Peça um número e exiba seu fatorial (n!).

console.log("-Exercício 11");

var numerofator = parseInt(prompt("Digite um número para calcular o fatorial:"));
var resultado3 = 1;

for (var i = 1; i <= numerofator; i++) {
    resultado3 = resultado3 * i;
}

console.log("O fatorial de " + numerofator+ " é: " + resultado3);

//12. Validação de Nota
//Peça uma nota de 0 a 10 e continue pedindo até que o usuário insira um valor válido.

console.log("-Exercício 12");

var nota = -1;
while (nota < 0 || nota > 10) {
    nota = parseFloat(prompt("digite uma nota valida 0 a 10:"));
    if (nota < 0 || nota > 10) {
        console.log("nota inválida! tente novamente");
    }
}
console.log("nota aceita: " + nota);

//13. Média de Notas
//Peça 3 notas ao usuário, calcule e exiba sua média. Informe se ele foi aprovado (média ≥ 7) ou reprovado.

console.log("-Exercício 13");

var numero7 = parseFloat(prompt("Digite a primeira nota:"));
var numero8 = parseFloat(prompt("Digite a segunda nota:"));
var numero9 = parseFloat(prompt("Digite a terceira nota:"));

var media = (numero7 + numero8 + numero9) / 3;
console.log("sua média é: " + media.toFixed(2));

if (media >= 7) {
    console.log("aprovado!");
} else {
    console.log("reprovado");
}

//14. Caixa Eletrônico
//Peça um valor ao usuário e informe as possíveis cédulas para saque (100, 50, 20, 10, 5, 2, 1).

console.log("-Exercício 14");

var valor9 = parseInt(prompt("Valor:"));
var numero10 = parseInt(valor / 100);
valor %= 100;
var numero11 = parseInt(valor / 50);
valor %= 50;
var numero12 = parseInt(valor / 20);
valor %= 20;
var numero13 = parseInt(valor / 10);
valor %= 10;
var numero14 = parseInt(valor / 5);
valor %= 5;
var numero15 = parseInt(valor / 2);
valor %= 2;
var numero16 = valor;
if (numero10 > 0) console.log(numero10 + " de 100");
if (numero11 > 0) console.log(numero11 + " de 50");
if (numero12 > 0) console.log(numero12 + " de 20");
if (numero13 > 0) console.log(numero13 + " de 10");
if (numero14 > 0) console.log(numero14 + " de 5");
if (numero15 > 0) console.log(numero15 + " de 2");
if (numero16 > 0) console.log(numero16 + " de 1");
//15. Números Ímpares
//Peça um número ao usuário e exiba todos os números ímpares de 1 até esse número.

console.log("-Exercício 15");

var limite = parseInt(prompt("impares até:"));

for (var i = 1; i <= limite; i++) {
    if (i % 2 !== 0) console.log(i);
}