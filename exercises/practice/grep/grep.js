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

//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.

function parseArguments(args) {
  const flags = [];
  let pattern = '';
  const files = [];

  for (let i = 2; i < args.length; i++) {
    if (args[i].startsWith('-')) {
      flags.push(...args[i].slice(1));
    } else if (!pattern) {
      pattern = args[i];
    } else {
      files.push(args[i]);
    }
  }

  return { flags, pattern, files };
}

function grep(flags, pattern, file) {
function grep(flags, pattern, file, dataDir = 'data') {
  const results = [];
  const lines = readLines(path.join(dataDir, file));

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = regex.test(line);

    if ((match && !flags.includes('v')) || (!match && flags.includes('v'))) {
      if (flags.includes('x') && line !== pattern) {
        continue;
      }

      let result = '';

      if (flags.includes('n')) {
        result += `${i + 1}:`;
      }

      result += line;
      results.push(result);
    }
  }

  return results;
}

const { flags, pattern, files } = parseArguments(ARGS);

files.forEach((file) => {
  const results = grep(flags, pattern, file);

  if (flags.includes('l') && results.length > 0) {
    console.log(file);
  } else {
    console.log(results.join('\n'));
  }
});