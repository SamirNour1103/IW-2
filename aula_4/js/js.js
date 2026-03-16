

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

//10. Adivinhação
//Escolha um número aleatório de 1 a 10 e peça ao usuário para adivinhar. Dê dicas até ele acertar.

//11. Cálculo de Fatorial
//Peça um número e exiba seu fatorial (n!).

//12. Validação de Nota
//Peça uma nota de 0 a 10 e continue pedindo até que o usuário insira um valor válido.

//13. Média de Notas
//Peça 3 notas ao usuário, calcule e exiba sua média. Informe se ele foi aprovado (média ≥ 7) ou reprovado.

//14. Caixa Eletrônico
//Peça um valor ao usuário e informe as possíveis cédulas para saque (100, 50, 20, 10, 5, 2, 1).

//15. Números Ímpares
//Peça um número ao usuário e exiba todos os números ímpares de 1 até esse número.
