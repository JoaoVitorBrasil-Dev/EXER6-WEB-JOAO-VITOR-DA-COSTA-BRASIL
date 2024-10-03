function gerarLista() {
    var quantidade = document.getElementById('quantidade').value;
    var lista = document.getElementById('lista');
    var mensagem = document.getElementById('mensagem');
    lista.innerHTML = '';
    mensagem.innerText = '';
    if (quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
        mensagem.innerText = 'Por favor, insira um número válido.';
        return;
    }
    for (var i = 1; i <= quantidade; i++) {
        var item = document.createElement('li');
        item.innerText = 'João Vítor da Costa Brasil ' + i;
        lista.appendChild(item);
    }
}