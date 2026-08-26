const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/background: #1a1a1c;/g, `background: var(--glass-surface); backdrop-filter: blur(8px);`);
html = html.replace(/background: #050505;/g, `background: var(--glass-base); backdrop-filter: var(--glass-blur);`);

fs.writeFileSync('index.html', html, 'utf8');
