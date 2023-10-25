function raffleTeams() {
    const names = document.getElementById('team-names').value;
    const namesArray = names.split(',').map(name => name.trim());

    if (namesArray.length < 2) {
        alert('Por favor, insira pelo menos dois names para formar as equipes.');
        return;
    }

    const drawnTeams = formTeams(namesArray);
    document.getElementById('team-results').innerHTML = `Equipe 1: ${drawnTeams[0].join(', ')} - <br>Equipe 2: ${drawnTeams[1].join(', ')} - `;
}

function formTeams(namesArray) {
    // sorteio de nomes
    const randomNames = shuffleArray(namesArray);

    const team1 = [];
    const team2 = [];

    for (let i = 0; i < randomNames.length; i++) {
        if (i % 2 === 0) {
            team1.push(randomNames[i]);
        } else {
            team2.push(randomNames[i]);
        }
    }

    return [team1, team2];
}

// Ordem
function raffleOrder() {
    const namesList = document.getElementById('names-list').value;
    const names = namesList.split(',').map(name => name.trim());

    if (names.length < 2) {
        alert('Por favor, insira pelo menos dois names.');
        return;
    }

    const randomNames = shuffleArray(names);
    const ul = document.getElementById('order-result');
    ul.innerHTML = '';

    for (let i = 0; i < randomNames.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1}º: ${randomNames[i]}`;

        // Cria uma caixa de texto ao lado de cada name
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Digite algo';
        li.appendChild(input);

        ul.appendChild(li);
    }
}

/* function sortearnameUnico() {
    const namesLista = document.getElementById('map').value;
    const names = namesLista.split(',').map(name => name.trim());

    if (names.length === 0) {
        alert('Por favor, insira pelo menos um name.');
        return;
    }

    const drawnMap = names[Math.floor(Math.random() * names.length)];
    document.getElementById('map-result').textContent = `Mapa: ${drawnMap}`;
} */

const mapListBO3 = ["Aquarium", "Breach", "Combine", "Evac", "Exodus", "Fringe", "Hacoc", "Hunted", "Infection", "Metro", "Redwood", "Stronghold", "NUK3TOWN"];
const mapListBO4 = ["Arsenal", "Contraband", "Firing Range", "Frequency", "Gridlock", "Hacienda", "Icebreaker", "Jungle", "Militia", "Morocco", "Payload", "Seaside", "Slums", "Summit"];
const mapListCW = ["Armada", "Cartel", "Checkmate", "Crossroads", "Garrison", "Miami", "Moscow", "Satellite", "Nuketown", "Raid", "The Pines", "Express", "Apocalypse", "Miami Strike", "Diesel", "Yamantau", "Standoff", "Collateral", "Hijacked", "Rush", "Echelon", "Drive-In", "Slums", "Zoo", "Amerika", "Deprogram", "WMD", "Jungle"];

function updateDefaultList() {
    const select = document.getElementById('map');
    const selectedOption = select.value;

    if (selectedOption === "other") {
        document.getElementById('map-input').style.display = 'block';
    } else {
        document.getElementById('map-input').style.display = 'none';
    }
}

function raffleMap() {
    const selectedOption = document.getElementById('map').value;

    if (selectedOption === "other") {
        return;
    }

    let mapList = [];

    switch (selectedOption) {
        case "bo3":
            mapList = mapListBO3;
            break;
        case "bo4":
            mapList = mapListBO4;
            break;
        case "bocw":
            mapList = mapListCW;
            break;
    }

    if (mapList.length > 0) {
        const drawnIndex = Math.floor(Math.random() * mapList.length);
        const drawnMap = mapList[drawnIndex];
        document.getElementById('map-result').textContent = `Mapa: ${drawnMap}`;
    }
}

function raffleCustomMap() {
    const mapList = document.getElementById('map-input').value;
    const map = mapList.split(',').map(name => name.trim());

    if (map.length > 0) {
        const drawnIndex = Math.floor(Math.random() * map.length);
        const drawnMap = map[drawnIndex];
        document.getElementById('map-result').textContent = `Mapa: ${drawnMap}`;
    } else {
        alert('Por favor, insira pelo menos um mapa separado por vírgula.');
    }
}

// Sorteio
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showResults() {
    // Resultado Equipes
    const teamResults = document.getElementById('team-results').textContent;

    // Resultado Ordem
    const ul = document.getElementById('order-result');
    const orderResult = [];
    for (let i = 0; i < ul.children.length; i++) {
        const name = ul.children[i].textContent.split(': ')[1];
        const textBox = ul.children[i].getElementsByTagName('input')[0].value;
        orderResult.push({ name, textBox });
    }

    // Resultado Mapa
    const mapResult = document.getElementById('map-result').textContent;

    // Resultados
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Resultados:</h2>';
    resultsDiv.innerHTML += `<p>${teamResults}</p>`;
    orderResult.forEach((result, index) => {
        resultsDiv.innerHTML += `<p>${result.name} - Bans/Protects: ${result.textBox}</p>`;
    });
    resultsDiv.innerHTML += `<p>Mapa: ${drawnMap}</p>`;
}

