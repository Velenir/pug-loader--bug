// index.js
console.log("index.js");

// requiring works always, mixin or no mixin
const html = require('!!pug?pretty!./index.pug')();
console.log(html);

const pre = document.createElement('pre');
pre.textContent = html;

document.body.appendChild(pre);
