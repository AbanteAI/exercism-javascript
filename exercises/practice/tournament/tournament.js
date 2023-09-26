//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const teamStats = new Map();
  const lines = input.trim().split('\n');
  
  for (const line of lines) {
    const [team1, team2, result] = line.split(';');
    updateStats(teamStats, team1, team2, result);
  }
  
  const sortedStats = sortStats(teamStats);
  return generateTable(sortedStats);
};

const updateStats = (teamStats, team1, team2, result) => {
  const [team1Stats, team2Stats] = [teamStats.get(team1) || createTeamStats(), teamStats.get(team2) || createTeamStats()];
  
  team1Stats.matchesPlayed++;
  team2Stats.matchesPlayed++;
  
  if (result === 'win') {
    team1Stats.wins++;
    team1Stats.points += 3;
    team2Stats.losses++;
  } else if (result === 'loss') {
    team2Stats.wins++;
    team2Stats.points += 3;
    team1Stats.losses++;
  } else if (result === 'draw') {
    team1Stats.draws++;
    team1Stats.points++;
    team2Stats.draws++;
    team2Stats.points++;
  }
  
  teamStats.set(team1, team1Stats);
  teamStats.set(team2, team2Stats);
};

const createTeamStats = () => ({
  matchesPlayed: 0,
  wins: 0,
  draws: 0,
  losses: 0,
  points: 0
});

const sortStats = (teamStats) => {
  const sortedStats = Array.from(teamStats.entries()).sort(([team1, stats1], [team2, stats2]) => {
    if (stats1.points !== stats2.points) {
      return stats2.points - stats1.points;
    } else {
      if (team1 < team2) {
        return -1;
      } else if (team1 > team2) {
        return 1;
      } else {
        return 0;
      }
    }
    }
  });
  return sortedStats;
};

const generateTable = (sortedStats) => {
  let table = 'Team                           | MP |  W |  D |  L |  P\n';
  for (const [team, stats] of sortedStats) {
    table += `${team.padEnd(31)}|  ${stats.matchesPlayed} |  ${stats.wins} |  ${stats.draws} |  ${stats.losses} |  ${stats.points}\n`;
  }
  return table;
};
