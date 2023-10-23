function sortearEquipes() {
    const nomes = document.getElementById('nomes-equipes').value;
    const nomesArray = nomes.split(',').map(nome => nome.trim());

    if (nomesArray.length < 2) {
        alert('Por favor, insira pelo menos dois nomes para formar as equipes.');
        return;
    }

    const equipesSorteadas = formarEquipes(nomesArray);
    document.getElementById('resultado-equipes').innerHTML = `Equipe 1: ${equipesSorteadas[0].join(', ')}<br>Equipe 2: ${equipesSorteadas[1].join(', ')}`;
}

function formarEquipes(nomesArray) {
    // Embaralhe a lista de nomes aleatoriamente
    const nomesEmbaralhados = shuffleArray(nomesArray);

    const equipe1 = [];
    const equipe2 = [];

    for (let i = 0; i < nomesEmbaralhados.length; i++) {
        if (i % 2 === 0) {
            equipe1.push(nomesEmbaralhados[i]);
        } else {
            equipe2.push(nomesEmbaralhados[i]);
        }
    }

    return [equipe1, equipe2];
}

function sortearNomeUnico() {
    const nomesLista = document.getElementById('nomes-unico').value;
    const nomes = nomesLista.split(',').map(nome => nome.trim());

    if (nomes.length === 0) {
        alert('Por favor, insira pelo menos um nome.');
        return;
    }

    const nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('resultado-nome-unico').textContent = `Mapa: ${nomeSorteado}`;
}

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para exibir a ordem de nomes
function sortearOrdemNomes() {
    const nomesLista = document.getElementById('nomes-lista').value;
    const nomes = nomesLista.split(',').map(nome => nome.trim());

    if (nomes.length < 2) {
        alert('Por favor, insira pelo menos dois nomes.');
        return;
    }

    const nomesEmbaralhados = shuffleArray(nomes);
    const ul = document.getElementById('resultado-ordem-nomes');
    ul.innerHTML = '';

    for (let i = 0; i < nomesEmbaralhados.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1}º: ${nomesEmbaralhados[i]}`;

        // Cria uma caixa de texto ao lado de cada nome
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Digite algo';
        li.appendChild(input);

        ul.appendChild(li);
    }
}


function mostrarResultados() {
    // Obtenha os resultados do sorteio de equipes
    const resultadoEquipes = document.getElementById('resultado-equipes').textContent;

    // Obtenha os resultados do sorteio de ordem de nomes
    const ul = document.getElementById('resultado-ordem-nomes');
    const resultadosOrdemNomes = [];
    for (let i = 0; i < ul.children.length; i++) {
        const nome = ul.children[i].textContent.split(': ')[1];
        const textoCaixa = ul.children[i].getElementsByTagName('input')[0].value;
        resultadosOrdemNomes.push({ nome, textoCaixa });
    }

    // Obtenha o resultado do sorteio de nome único
    const resultadoNomeUnico = document.getElementById('resultado-nome-unico').textContent;

    // Exiba os resultados onde você preferir na página
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '<h2>Resultados:</h2>';
    resultadosDiv.innerHTML += `<p>Sorteio de Equipes: ${resultadoEquipes}</p>`;
    resultadosOrdemNomes.forEach((resultado, index) => {
        resultadosDiv.innerHTML += `<p>${resultado.nome} - Bans/Protects: ${resultado.textoCaixa}</p>`;
    });

    resultadosDiv.innerHTML += `<p>Sorteio de Nome Único: ${resultadoNomeUnico}</p>`;
}

