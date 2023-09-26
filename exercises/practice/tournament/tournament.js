//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const teams = new Map();
  const lines = input.trim().split('\n');

  for (const line of lines) {
    const [team1, team2, result] = line.split(';');

    updateTeamStats(teams, team1, result);
    updateTeamStats(teams, team2, invertResult(result));
  }

  const sortedTeams = sortTeams(teams);

  return generateTable(sortedTeams);
};

const updateTeamStats = (teams, team, result) => {
  if (!teams.has(team)) {
    teams.set(team, { MP: 0, W: 0, D: 0, L: 0, P: 0 });
  }

  const stats = teams.get(team);

  stats.MP++;
  stats[result]++;
  stats.P += getPoints(result);
};

const invertResult = (result) => {
  if (result === 'win') {
    return 'loss';
  } else if (result === 'loss') {
    return 'win';
  }

  return 'draw';
};

const getPoints = (result) => {
  if (result === 'win') {
    return 3;
  } else if (result === 'draw') {
    return 1;
  }

  return 0;
};

const sortTeams = (teams) => {
  const sortedTeams = Array.from(teams.entries()).sort(([team1, stats1], [team2, stats2]) => {
    if (stats1.P === stats2.P) {
      return team1.localeCompare(team2);
    }

    return stats2.P - stats1.P;
  });

  return sortedTeams;
};

const generateTable = (sortedTeams) => {
  let table = 'Team                           | MP |  W |  D |  L |  P\n';

  for (const [team, stats] of sortedTeams) {
    table += `${team.padEnd(31)}|  ${stats.MP} |  ${stats.W} |  ${stats.D} |  ${stats.L} |  ${stats.P}\n`;
  }

  return table.trim();
};
