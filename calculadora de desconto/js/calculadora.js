function calcularDesconto() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const valorOriginal = parseFloat(document.getElementById('valorOriginal').value);
    const percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);

    if (isNaN(valorOriginal) || isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100) {
        alert('Por favor, insira valores válidos para o Valor Original e o Percentual de Desconto.');
        return;
    }

    const valorDesconto = (valorOriginal * percentualDesconto) / 100;
    const valorFinal = valorOriginal - valorDesconto;

    document.getElementById('nomeProdutoResultado').textContent = `Nome do Produto: ${nomeProduto}`;
    document.getElementById('valorDescontoResultado').textContent = `Valor do Desconto (R$): R$ ${valorDesconto.toFixed(2)}`;
    document.getElementById('valorFinalResultado').textContent = `Valor Final do Produto (R$): R$ ${valorFinal.toFixed(2)}`;
}

function limparCampo() {
    document.getElementById('nomeProduto').value = '';
    document.getElementById('valorOriginal').value = '';
    document.getElementById('percentualDesconto').value = '';
    document.getElementById('nomeProdutoResultado').textContent = '';
    document.getElementById('valorDescontoResultado').textContent = '';
    document.getElementById('valorFinalResultado').textContent = '';
}


document.getElementById('formDesconto').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularDesconto();
});


document.getElementById('botaoLimpar').addEventListener('click', function() {
    limparCampo();
});