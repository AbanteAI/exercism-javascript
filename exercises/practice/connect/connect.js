//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor() {
    this.board = [];

  winner() {
    // Implement the winner method here
    // Check if player O has connected top and bottom
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] === 'O' && this.board[i][this.board[i].length - 1] === 'O') {
        return 'O';
      }
    }

    // Check if player X has connected left and right
    for (let i = 0; i < this.board[0].length; i++) {
      if (this.board[0][i] === 'X' && this.board[this.board.length - 1][i] === 'X') {
        return 'X';
      }
    }

    // No winner
    return '';

}
