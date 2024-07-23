function sortTeams() {
    const teamSize = parseInt(document.getElementById('teamSize').value);
    const numTeams = parseInt(document.getElementById('numTeams').value);
    const playersInput = document.getElementById('players').value.trim().split('\n');
    
    let players = playersInput.map(player => {
        let [name, rating] = player.split(',').map(item => item.trim());
        return { name, rating: parseInt(rating) };
    });

    players.sort((a, b) => b.rating - a.rating);

    let teams = Array.from({ length: numTeams }, () => []);

    players.forEach((player, index) => {
        teams[index % numTeams].push(player);
    });

    displayTeams(teams);
}

function displayTeams(teams) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    teams.forEach((team, index) => {
        let teamDiv = document.createElement('div');
        teamDiv.innerHTML = `<h2>Time ${index + 1}</h2>`;
        team.forEach(player => {
            teamDiv.innerHTML += `<p>${player.name} (Classificação: ${player.rating})</p>`;
        });
        resultDiv.appendChild(teamDiv);
    });
}
