#!/usr/bin/node

const fs = require('fs');
const path = require('path');

const path = require('path');

function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;

function grep(pattern, flags, files) {
  const output = [];
  const regex = new RegExp(pattern, flags.includes('i') ? 'i' : '');

  files.forEach(file => {
    const lines = readLines(file);

    lines.forEach((line, index) => {
      const lineNumber = index + 1;

      if (regex.test(line)) {
        if (flags.includes('l')) {
          output.push(file);
        } else if (flags.includes('n')) {
          output.push(`${lineNumber}:${line}`);
        } else {
          output.push(line);
        }
      } else if (flags.includes('v') && !flags.includes('l')) {
        if (!line.trim()) {
          output.push(line);
        }
      }
    });
  });

  return output.join('\n');
}

const pattern = ARGS[2];
const flags = ARGS.slice(3, -1);
const files = ARGS.slice(-1);

const output = grep(pattern, flags, files);

console.log(output);

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;

function grep(pattern, flags, files) {
  const output = [];
  const regex = new RegExp(pattern, flags.includes('i') ? 'i' : '');

  files.forEach(file => {
    const lines = readLines(file);

    lines.forEach((line, index) => {
      const lineNumber = index + 1;

      if (regex.test(line)) {
        if (flags.includes('l')) {
          output.push(file);
        } else if (flags.includes('n')) {
          output.push(`${lineNumber}:${line}`);
        } else {
          output.push(line);
        }
      } else if (flags.includes('v') && !flags.includes('l')) {
        if (!line.trim()) {
          output.push(line);
        }
      }
    });
  });

  return output.join('\n');
}

const pattern = ARGS[2];
const flags = ARGS.slice(3, -1);
const files = ARGS.slice(-1);

const output = grep(pattern, flags, files);

console.log(output);

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;

function grep(pattern, flags, files) {
  const output = [];
  const regex = new RegExp(pattern, flags.includes('i') ? 'i' : '');

  files.forEach(file => {
    const lines = readLines(file);

    lines.forEach((line, index) => {
      const lineNumber = index + 1;

      if (regex.test(line)) {
        if (flags.includes('l')) {
          output.push(file);
        } else if (flags.includes('n')) {
          output.push(`${lineNumber}:${line}`);
        } else {
          output.push(line);
        }
      } else if (flags.includes('v') && !flags.includes('l')) {
        if (!line.trim()) {
          output.push(line);
        }
      }
    });
  });

  return output.join('\n');
}

const pattern = ARGS[2];
const flags = ARGS.slice(3, -1);
const files = ARGS.slice(-1);

const output = grep(pattern, flags, files);

console.log(output);
}

// Parse command line arguments
const pattern = ARGS[2];
const flags = ARGS.slice(3, -1);
const files = ARGS.slice(-1);

// Call grep function with parsed arguments
const output = grep(pattern, flags, files);

console.log(output);