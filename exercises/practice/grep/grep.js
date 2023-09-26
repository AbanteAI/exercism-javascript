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
 * Search a file for lines matching a regular expression pattern. Return the line
 * number and contents of each matching line.
 *
 * @param {string} pattern The pattern used to match lines in a file.
 * @param {string[]} files One or more files in which to search for matching lines.
 * @param {string[]} flags Zero or more flags to customize the matching behavior.
 * @returns {string} The matching lines.
 */
function grep(pattern, files, flags) {
  let output = '';

  for (const file of files) {
    const lines = readLines(file);

    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      const line = lines[lineNumber];

      let matches = line.match(pattern);

      if (matches) {
        if (flags.includes('-v')) {
          continue;
        }

        if (flags.includes('-l')) {
          output += `${file}\n`;
          break;
        }

        if (flags.includes('-n')) {
          output += `${lineNumber + 1}:${line}\n`;
        } else {
          output += `${line}\n`;
        }
      } else if (flags.includes('-v')) {
        if (flags.includes('-l')) {
          output += `${file}\n`;
          break;
        }

        if (flags.includes('-n')) {
          output += `${lineNumber + 1}:${line}\n`;
        } else {
          output += `${line}\n`;
        }
      }
    }
  }

  return output;
}

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

const ARGS = process.argv.slice(2);
const pattern = ARGS.shift();
const flags = ARGS.filter(arg => arg.startsWith('-'));
const files = ARGS.filter(arg => !arg.startsWith('-'));

const output = grep(pattern, files, flags);
console.log(output);