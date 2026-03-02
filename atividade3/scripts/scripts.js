function gerarTicket() {
    const nomeRaw = document.getElementById("input-nome").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim();
    
    // 1. Lógica do Nome (Primeiro e Último)
    const partesDoNome = nomeLimpo.split(" ");
    const primeiroNome = partesDoNome[0];
    const ultimoNome = partesDoNome[partesDoNome.length - 1];
    
    // Concatenando com "+" em vez de `${}`
    var nomeExibir = "";
    if (partesDoNome.length > 1) {
        nomeExibir = primeiroNome + " " + ultimoNome;
    } else {
        nomeExibir = primeiroNome;
    }

    
    const urgencia = document.getElementById("select-urgencia").value;
    let diasAdicionais = 0;

    if (urgencia === "Alta") {
        diasAdicionais = 2;
    } else if (urgencia === "Média") {
        diasAdicionais = 7;
    } else {
        diasAdicionais = 10; 
    }

    const dataAtual = new Date();
    const dataPrazo = new Date();
    dataPrazo.setDate(dataAtual.getDate() + diasAdicionais);

    document.getElementById('out-nome').innerText = nomeExibir;
    document.getElementById('out-data').innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById('out-prazo').innerText = dataPrazo.toLocaleDateString('pt-BR');
    
    document.getElementById('ticket-resultado').style.display = 'block';
}