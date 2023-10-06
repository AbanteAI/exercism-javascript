//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const teams = new Map();
  
  const processMatchResult = (team, outcome) => {
    if (!teams.has(team)) {
      teams.set(team, { MP: 0, W: 0, D: 0, L: 0, P: 0 });
    }
  
    const teamStats = teams.get(team);
    teamStats.MP += 1;
  
    if (outcome === 'win') {
      teamStats.W += 1;
      teamStats.P += 3;
    } else if (outcome === 'draw') {
      teamStats.D += 1;
      teamStats.P += 1;
    } else if (outcome === 'loss') {
      teamStats.L += 1;
    }
  };
  
  input.split('\n').forEach((line) => {
    const [team1, team2, outcome] = line.split(';');
    processMatchResult(team1, outcome);
    processMatchResult(team2, getOppositeOutcome(outcome));
  });
  
  const sortedTeams = [...teams.entries()].sort((a, b) => {
    const [teamA, statsA] = a;
    const [teamB, statsB] = b;
  
    if (statsA.P === statsB.P) {
      return teamA.localeCompare(teamB) || teamA.localeCompare(teamB, 'en', { sensitivity: 'base' });
    }
  });
  
  const table = ['Team                           | MP |  W |  D |  L |  P'];
  
  sortedTeams.forEach(([team, stats]) => {
    const { MP, W, D, L, P } = stats;
    const row = `${team.padEnd(31)}|  ${MP} |  ${W} |  ${D} |  ${L} |  ${P}`;
    table.push(row);
  });
  
  return table.join('\n');
};

const getOppositeOutcome = (outcome) => {
  if (outcome === 'win') {
    return 'loss';
  } else if (outcome === 'draw') {
    return 'draw';
  } else if (outcome === 'loss') {
    return 'win';
  }
};

