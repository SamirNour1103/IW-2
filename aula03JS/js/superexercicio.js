//exercico 1

alert ("Bem vindo ao site");

//exercico 2

let nome = prompt("Qual é o seu nome?");
alert("Olá," +nome+" !");

//exercico 3

let idade = prompt("Qual é o seu idade?");
alert("A idade do " +nome+ " é: " +idade+"  anos !");
if (idade < 18) {
    console.log("Você é menor de idade");
} else{
    console.log("Você é maior de idade");
}

//exercico 4

let resposta = confirm("Você quer continuar?");
if (resposta) {
    alert("Você escolheu continuar.");
} else{
    alert("Você cancelou a ação.")
}

//exercico 5

let soma1 = prompt("Me diga um número para somar");
let soma2 = prompt("Me diga outro número para somar");
let resultado = parseInt(soma1) + parseInt(soma2);
alert(soma1+ "+" +soma2+ "="  +resultado);

//exercico 6

let multiplo = prompt("Me diga um número para multiplicar por ele mesmo");
let resultado2 = parseInt(multiplo) * parseInt(multiplo);
alert(multiplo+ "x" +multiplo+ "="  +resultado2);

//exercico 7

let nome2 = prompt("Qual é o seu nome?");
let idade2 = prompt("Qual é o seu idade?");
alert("O nome dele é: " +nome2+ " e tem a idadde de: " +idade+"  anos !");
