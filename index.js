#! /usr/bin/env node

require('path')
const fs = require('fs');
let currentWorkingDirectory = process.cwd();
let text = fs.readFileSync(`${currentWorkingDirectory}/html/index.html`,"utf-8");
console.log(text);
