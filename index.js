#!/usr/bin/env node

const fs = require('fs');

console.log('Creating README.md');
 
const cwd = process.cwd();
const package = JSON.parse(fs.readFileSync(`${cwd}/package.json`, 'utf8'));

const data = {
  "repo-name": package.name,
  "npm-name": package.name,
  description: package.description,
  license: package.license,
};

// read the template from the init-readme folder
const readmeTemplate = fs.readFileSync(`${__dirname}/README.template.md`, 'utf8');

// ✨ magic happens ✨
const output = readmeTemplate.replace(/\${(.*?)}/g, (_, key) => data[key]); 

// write README.md to the current folder
fs.writeFileSync(`${cwd}/README.md`, output);
