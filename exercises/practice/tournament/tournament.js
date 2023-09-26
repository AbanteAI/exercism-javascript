//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const lines = input.trim().split('\n');
  if (input.trim() === '') {
    return 'Team                           | MP |  W |  D |  L |  P';
  }
  const teamStats = {};

  for (const line of lines) {
    const [team1, team2, result] = line.split(';');

    if (!teamStats[team1]) {
      teamStats[team1] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
    }
    if (!teamStats[team2]) {
      teamStats[team2] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
    }

    teamStats[team1].MP += 1;
    teamStats[team2].MP += 1;

    if (result === 'win') {
      teamStats[team1].W += 1;
      teamStats[team1].P += 3;
      teamStats[team2].L += 1;
    } else if (result === 'loss') {
      teamStats[team1].L += 1;
      teamStats[team2].W += 1;
      teamStats[team2].P += 3;
    } else {
      teamStats[team1].D += 1;
      teamStats[team1].P += 1;
      teamStats[team2].D += 1;
      teamStats[team2].P += 1;
    }
  }

  const sortedTeams = Object.keys(teamStats).sort((a, b) => {
    if (teamStats[a].P === teamStats[b].P) {
      return a.localeCompare(b);
    }
    return teamStats[b].P - teamStats[a].P;
  });

  let output = 'Team                           | MP |  W |  D |  L |  P\n';
  for (const team of sortedTeams) {
    const stats = teamStats[team];
    output += `${team.padEnd(31)}|  ${stats.MP} |  ${stats.W} |  ${stats.D} |  ${stats.L} |  ${stats.P}\n`;
  }

  return output.trim();
};
