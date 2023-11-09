//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const parseInput = (input) => {
  return input.split('\n').map(line => line.split(';'));
};

const updateTeamStats = (teamStats, matchResult) => {
  const [team1, team2, result] = matchResult;

  if (!teamStats[team1]) {
    teamStats[team1] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
  }
  if (!teamStats[team2]) {
    teamStats[team2] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
  }

  teamStats[team1].MP++;
  teamStats[team2].MP++;

  if (result === 'win') {
    teamStats[team1].W++;
    teamStats[team1].P += 3;
    teamStats[team2].L++;
  } else if (result === 'draw') {
    teamStats[team1].D++;
    teamStats[team1].P++;
    teamStats[team2].D++;
    teamStats[team2].P++;
  } else {
    teamStats[team1].L++;
    teamStats[team2].W++;
    teamStats[team2].P += 3;
  }
};

const sortTeams = (teamStats) => {
  return Object.keys(teamStats).sort((a, b) => {
    if (teamStats[a].P !== teamStats[b].P) {
      return teamStats[b].P - teamStats[a].P;
    }
    return a.localeCompare(b);
  });
};

export const tournamentTally = (input) => {
  const matchResults = parseInput(input);
  const teamStats = {};

  matchResults.forEach(matchResult => {
    updateTeamStats(teamStats, matchResult);
  });

  const sortedTeams = sortTeams(teamStats);

  let output = 'Team                           | MP |  W |  D |  L |  P\n';
  sortedTeams.forEach(team => {
    output += `${team.padEnd(31)}|  ${teamStats[team].MP} |  ${teamStats[team].W} |  ${teamStats[team].D} |  ${teamStats[team].L} |  ${teamStats[team].P}\n`;
  });

  return output.trim();
};
