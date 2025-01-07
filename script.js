// script.js

document.getElementById('calcularBtn').addEventListener('click', function () {
    // Captura os dados do formulário
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itensVenda = document.getElementById('itensVenda').value.replace('%', '').trim();
    const irpf = parseFloat(document.getElementById('irpf').value.replace('%', '').trim());
    const pis = parseFloat(document.getElementById('pis').value.replace('%', '').trim());
    const cofins = parseFloat(document.getElementById('cofins').value.replace('%', '').trim());
    const inss = parseFloat(document.getElementById('inss').value.replace('%', '').trim());
    const issqn = parseFloat(document.getElementById('issqn').value.replace('%', '').trim());

//adiconar porcentagem como possibilidade do usuário escolher.(não esquecer)

    // Validação básica
    if (isNaN(valorVenda) || valorVenda <= 0) {
        alert('Por favor, insira um valor válido para a venda.');
        return;
    }
    // Verificar se as porcentagens são válidas
    if (isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert('Por favor, insira valores válidos para as porcentagens.');
        return;
    }

    // Calcula os impostos
    const irpfValor = (valorVenda * irpf) / 100;
    const pisValor = (valorVenda * pis) / 100;
    const cofinsValor = (valorVenda * cofins) / 100;
    const inssValor = (valorVenda * inss) / 100;
    const issqnValor = (valorVenda * issqn) / 100;

    const totalImpostos = irpfValor + pisValor + cofinsValor + inssValor + issqnValor;
    const valorLiquido = valorVenda - totalImpostos;

    // Exibe a NFS-e
    const nfsOutput = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itensVenda}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>IRPF:</strong> R$ ${irpfValor.toFixed(2)}</p>
        <p><strong>PIS:</strong> R$ ${pisValor.toFixed(2)}</p>
        <p><strong>COFINS:</strong> R$ ${cofinsValor.toFixed(2)}</p>
        <p><strong>INSS:</strong> R$ ${inssValor.toFixed(2)}</p>
        <p><strong>ISSQN:</strong> R$ ${issqnValor.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
    document.getElementById('nfsOutput').innerHTML = nfsOutput;



// Habilita o botão de imprimir
document.getElementById('imprimirBtn').style.display = 'inline-block';
});

// Adiciona a funcionalidade de impressão
document.getElementById('imprimirBtn').addEventListener('click', function () {
    window.print(); // Chama a função de impressão do navegador
});
