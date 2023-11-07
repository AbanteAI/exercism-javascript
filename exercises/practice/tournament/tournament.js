//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  if (!input.trim()) {
    return 'Team                           | MP |  W |  D |  L |  P\n';
  }

  const teams = {};

  const addOrUpdateTeam = (team, points, result) => {
    if (!teams[team]) {
      teams[team] = { mp: 0, w: 0, d: 0, l: 0, p: 0 };
    }
    teams[team].mp += 1;
    teams[team].p += points;
    teams[team][result] += 1;
  };

  input.split('\n').forEach(line => {
    if (line.trim()) {
      const [team1, team2, result] = line.split(';');
      switch (result) {
        case 'win':
          addOrUpdateTeam(team1, 3, 'w');
          addOrUpdateTeam(team2, 0, 'l');
          break;
        case 'loss':
          addOrUpdateTeam(team1, 0, 'l');
          addOrUpdateTeam(team2, 3, 'w');
          break;
        case 'draw':
          addOrUpdateTeam(team1, 1, 'd');
          addOrUpdateTeam(team2, 1, 'd');
          break;
      }
    }
  });

  const sortedTeams = Object.keys(teams)
    .sort((a, b) => {
      if (teams[a].p === teams[b].p) {
        return a.localeCompare(b);
      }
      return teams[b].p - teams[a].p;
    });

  const output = sortedTeams.map(team => {
    const { mp, w, d, l, p } = teams[team];
    return `${team.padEnd(31)}|  ${mp} |  ${w} |  ${d} |  ${l} |  ${p}`;
  });

  return `Team                           | MP |  W |  D |  L |  P\n${output.join('\n')}`;
};
};
