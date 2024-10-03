document.getElementById('botao_nome').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;

    if (nome.trim() === "") {
        document.getElementById('mensagem').innerText = "Por favor, insira seu nome";
    } else {
        var mensagem = "Olá " + nome + "! Seja Bem-Vindo à página do aluno: João Vítor da Costa Brasil";
        document.getElementById('mensagem').innerText = mensagem;
    }
});