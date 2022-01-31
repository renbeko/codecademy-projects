const team = {
  _players: [
    {
      firstName: 'Michael',
      lastName: 'Jordan',
      age: 32,
    },
    {
      firstName: 'Larry',
      lastName: 'Bird',
      age: 28,
    },
    {
      firstName: 'Dirk',
      lastName: 'Nowitzki',
      age: 25,
    },
  ],
  _games: [
    {
      opponent: 'Utah Jazz',
      teamPoints: 87,
      opponentPoints: 86,
    },
    {
      opponent: 'Houston Rockets',
      teamPoints: 114,
      opponentPoints: 97,
    },
    {
      opponent: 'Phoenix Suns',
      teamPoints: 120,
      opponentPoints: 109,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const newGame = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(newGame);
  },
};

team.addPlayer('Scottie', 'Pippen', 32);
team.addPlayer('Justin', 'Anderson', 26);
team.addPlayer('Steven', 'Adams', 23);

team.addGame('Bulls', 76, 54);
team.addGame('Celtics', 82, 44);
team.addGame('Hawks', 102, 76);

console.log(team.players);
console.log();
console.log(team.games);