//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const lines = input.trim().split('\n');
  if (input === '') return 'Team                           | MP |  W |  D |  L |  P';
  const results = {};

  // Parse input and store match results
  for (const line of lines) {
    const [team1, team2, outcome] = line.split(';');
    if (!results[team1]) results[team1] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
    if (!results[team2]) results[team2] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };

    results[team1].MP++;
    results[team2].MP++;

    if (outcome === 'win') {
      results[team1].W++;
      results[team1].P += 3;
      results[team2].L++;
    } else if (outcome === 'loss') {
      results[team2].W++;
      results[team2].P += 3;
      results[team1].L++;
    } else {
      results[team1].D++;
      results[team1].P++;
      results[team2].D++;
      results[team2].P++;
    }
  }

  // Sort teams by points and name
  const sortedTeams = Object.keys(results).sort((a, b) => {
    if (results[a].P === results[b].P) return a.localeCompare(b);
    return results[b].P - results[a].P;
  });

  // Format results into table format
  const header = 'Team                           | MP |  W |  D |  L |  P';
  const table = sortedTeams.map(team => {
    const { MP, W, D, L, P } = results[team];
    return `${team.padEnd(31)}| ${MP.toString().padStart(2)} | ${W.toString().padStart(2)} | ${D.toString().padStart(2)} | ${L.toString().padStart(2)} | ${P.toString().padStart(2)}`;
  }).join('\n');

  return `${header}\n${table}`;
};
