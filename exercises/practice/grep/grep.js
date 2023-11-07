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
function parseArguments(args) {
  const flags = args.filter(arg => arg.startsWith('-')).map(flag => flag.substring(1));
  const files = args.filter(arg => !arg.startsWith('-'));
  const pattern = files.shift();

  return { pattern, flags, files };
}

function grep(pattern, flags, files) {
  const results = [];
  const patternRegex = new RegExp(pattern, flags.includes('i') ? 'i' : '');

  files.forEach(file => {
    const lines = readLines(file);
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const match = flags.includes('x') ? line === pattern : patternRegex.test(line);
      const shouldInvert = flags.includes('v');
      const lineMatches = shouldInvert ? !match : match;

      if (lineMatches) {
        if (flags.includes('l')) {
          if (!results.includes(file)) {
            results.push(file);
          }
        } else {
          const outputLine = flags.includes('n') ? `${lineNum}:${line}` : line;
          results.push(outputLine);
        }
      }
    });
  });

  return results.join('\n');
}

function main() {
  const { pattern, flags, files } = parseArguments(ARGS.slice(2));

  if (!pattern || files.length === 0) {
    console.error('Usage: grep.js <pattern> <file>...');
    process.exit(1);
  }

  const output = grep(pattern, flags, files);
  console.log(output);
}

main();

//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.
