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
 * @param {string} pattern the pattern to match lines
 * @param {string[]} files the files to search for matching lines
 * @param {string[]} flags the flags to customize the matching behavior
 * @returns {string} the matching lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}
  for (const file of files) {
    const lines = readLines(file);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      const match = regex.test(line);

      if (
        (flags.includes('x') && line === pattern) ||
        (flags.includes('v') && !match) ||
        (!flags.includes('v') && match)
      ) {
        if (flags.includes('l')) {
          matches.push(file);
          break;
        } else {
          if (flags.includes('n')) {
            matches.push(`${lineNumber}:${line}`);
          } else {
            matches.push(line);
          }
        }
      }
    }
  }

  return matches.join('\\n');
}

const pattern = ARGS[2];
const flags = ARGS.slice(3, -1);
const files = ARGS.slice(3);

console.log(grep(pattern, files, flags));