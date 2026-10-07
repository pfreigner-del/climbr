// Copies the web app (web/) into www/ for bundling. Keeps one source of truth.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'web'), dst = path.join(__dirname, '..', 'www');
fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true });
console.log('Copied web/ -> www/');
