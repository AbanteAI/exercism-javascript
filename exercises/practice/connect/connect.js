//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
constructor() {
    this.board = [];
}

winner() {
    const playerXConnected = this.checkConnection('X');
    const playerOConnected = this.checkConnection('O');

    if (playerXConnected && playerOConnected) {
        return '';
    } else if (playerXConnected) {
        return 'X';
    } else if (playerOConnected) {
        return 'O';
    } else {
        return '';
    }
}

checkConnection(player) {
    // Implement the logic to check if the player has made a connection
}
}
