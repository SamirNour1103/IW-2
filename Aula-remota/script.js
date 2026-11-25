const formulario = document.getElementById("meuFormulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome === "" || email === "" || idade === "" || senha === "" || confirmarSenha === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: Por favor, preencha todos os campos.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: Digite um e-mail válido (ex: nome@email.com).";
        return;
    }

    if (isNaN(idade) || Number(idade) <= 0) {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: A idade deve ser um número maior que zero.";
        return;
    }

    if (senha.length < 6) {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: As senhas não coincidem.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Sucesso! Redirecionando...";

    setTimeout(function() {
        window.location.href = "sucesso.html";
    }, 1000);
});