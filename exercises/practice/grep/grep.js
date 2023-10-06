#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;

const patterns = ARGS.slice(2, -1);
const files = ARGS.slice(-1);

function grep(patterns, files) {
  const options = ARGS.slice(2, -1).filter((arg) => arg.startsWith('-'));
  const patternsToSearch = ARGS.slice(2, -1).filter((arg) => !arg.startsWith('-'));
  const isCaseInsensitive = options.includes('-i');
  const isReverse = options.includes('-v');
  const isMatchEntireLine = options.includes('-x');
  const isPrintLineNumbers = options.includes('-n');
  const isPrintFileNames = options.includes('-l');

  let output = '';

  for (const file of files) {
    const lines = readLines(file);
    let matchingLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = isCaseInsensitive
        ? line.match(new RegExp(patternsToSearch.join('|'), 'i'))
        : line.match(new RegExp(patternsToSearch.join('|')));

      if (isMatchEntireLine ? match && match[0] === line : match) {
        matchingLines.push(isPrintLineNumbers ? `${i + 1}:${line}` : line);
      }
    }

    if (isReverse) {
      matchingLines = lines.filter((line) => !matchingLines.includes(line));
    }

    if (isPrintFileNames && matchingLines.length > 0) {
      output += `${file}\n`;
    } else {
      output += matchingLines.join('\n') + '\n';
    }
  }

  return output.trim();
}

const output = grep(patterns, files);
console.log(output);

