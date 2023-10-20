//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const teams = new Map();
  const lines = input.split('\n');

  for (const line of lines) {
    if (line.trim() === '') continue;

    const [team1, team2, outcome] = line.split(';');

    updateTeamStats(team1, team2, outcome);
    updateTeamStats(team2, team1, getOppositeOutcome(outcome));
  }

  const table = generateTable();

  return table;

  function updateTeamStats(team, opponent, outcome) {
    if (!teams.has(team)) {
      teams.set(team, {
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        P: 0,
      });
    }

    const teamStats = teams.get(team);

    teamStats.MP++;
    teamStats[outcome]++;
    teamStats.P += getPoints(outcome);
  }

  function getOppositeOutcome(outcome) {
    if (outcome === 'win') return 'loss';
    if (outcome === 'loss') return 'win';
    return 'draw';
  }

  function getPoints(outcome) {
    if (outcome === 'win') return 3;
    if (outcome === 'draw') return 1;
    return 0;
  }

  function generateTable() {
    const sortedTeams = Array.from(teams.entries()).sort((a, b) => {
      const [teamA, statsA] = a;
      const [teamB, statsB] = b;

      if (statsA.P === statsB.P) {
        return teamA.localeCompare(teamB);
      }

      return statsB.P - statsA.P;
    });

    let table = 'Team                           | MP |  W |  D |  L |  P\n';

    for (const [team, stats] of sortedTeams) {
      table += `${team.padEnd(31)}|  ${stats.MP} |  ${stats.W} |  ${stats.D} |  ${stats.L} |  ${stats.P}\n`;
    }

    return table.trim();
  }
};
