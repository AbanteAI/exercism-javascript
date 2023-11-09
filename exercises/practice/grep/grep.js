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
  const data = fs.readFileSync(path.join(__dirname, file), { encoding: 'utf-8' });
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

function grep(pattern, files, options) {
  let result = [];

  for (const file of files) {
    const lines = readLines(file);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      let match = options.i ? new RegExp(pattern, 'i').test(line) : new RegExp(pattern).test(line);

      if (options.v) {
        match = !match;
      }

      if (options.x) {
        match = match && line === pattern;
      }

      if (match) {
        if (options.l) {
          result.push(file);
          break;
        } else {
          const output = options.n ? `${lineNumber}:${line}` : line;
          result.push(output);
        }
      }
    }
  }

  return result.join('\n');
}

function parseArguments(args) {
  const options = {};
  const files = [];

  for (let i = 2; i < args.length; i++) {
    if (args[i].startsWith('-')) {
      for (const option of args[i].substring(1)) {
        if (VALID_OPTIONS.includes(option)) {
          options[option] = true;
        }
      }
    } else {
      files.push(args[i]);
    }
  }

  return { options, files };
}

const { options, files } = parseArguments(ARGS);
const pattern = ARGS[2];
const output = grep(pattern, files, options);
console.log(output);