const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/\.btn-confirm \{ background: var\(--ios-blue\); color: var\(--text-main\);/, 
    ".btn-confirm { background: var(--ios-blue); color: #000000;");

// check the style applied inline
html = html.replace(/<button class="btn-modal btn-confirm" id="confirm-btn-ok" style="background: var\(--ios-red\); box-shadow: 0 8px 15px rgba\(255, 69, 58, 0\.4\);">/g,
    `<button class="btn-modal btn-confirm" id="confirm-btn-ok" style="background: var(--ios-red); color: #ffffff; box-shadow: 0 8px 15px rgba(255, 69, 58, 0.4);">`);

fs.writeFileSync('index.html', html, 'utf8');
