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

function grep(pattern, flags, files) {
  const isMatch = (line) => {
    if (flags.includes('x')) {
      return line === pattern;
    }
    const regex = new RegExp(pattern, flags.includes('i') ? 'i' : undefined);
    return regex.test(line);
  };

  const results = [];
  for (const file of files) {
    const lines = readLines(file);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      const shouldInclude =
        (flags.includes('v') && !isMatch(line)) ||
        (!flags.includes('v') && isMatch(line));
      if (shouldInclude) {
        if (flags.includes('l')) {
      if (flags.includes('l')) {
        if (results.length > 0) {
          return files.join('\n');
        } else {
          continue;
        }
      }
          results.push(flags.includes('n') ? `${lineNumber}:${line}` : line);
        }
      }
    }
  }

  return results.join('\n');
}

const pattern = ARGS[2];
const flags = ARGS.slice(3, -1);
const files = ARGS.slice(-1);

console.log(grep(pattern, flags, files));
