#! /usr/bin/env node

const fs = require('fs');
let currentWorkingDirectory = process.cwd();
let text = fs.readFileSync(`${currentWorkingDirectory}/node_modules/copy-html/html/index.html`,"utf-8");
console.log(text);
