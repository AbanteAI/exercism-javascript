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

function grep(pattern, flags, files) {
  let results = [];
  let lineNumberFlag = flags.includes('n');
  let fileNameFlag = flags.includes('l');
  let ignoreCaseFlag = flags.includes('i');
  let invertFlag = flags.includes('v');
  let entireLineFlag = flags.includes('x');

  for (let file of files) {
    let lines = readLines(file);
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let regexPattern = entireLineFlag ? `^${pattern}$` : pattern;
      let regex = new RegExp(regexPattern, ignoreCaseFlag ? 'i' : '');
      let match = regex.test(line);
      if (invertFlag) match = !match;
      if (match) {
        let result = '';
        if (fileNameFlag) {
          result = file;
        } else {
          if (lineNumberFlag) result += (i + 1) + ':';
          result += line;
        }
        results.push(result);
        if (fileNameFlag) break;
      }
    }
  }
  return results.join('\n');
}

const args = process.argv.slice(2);
let flags = [];
let files = [];
let pattern = '';

for (let arg of args) {
  if (arg.startsWith('-')) {
    flags.push(...arg.slice(1).split(''));
  } else if (!pattern) {
    pattern = arg;
  } else {
    files.push(arg);
  }
}

console.log(grep(pattern, flags, files));