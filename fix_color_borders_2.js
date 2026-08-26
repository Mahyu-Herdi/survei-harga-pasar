const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Global action buttons
html = html.replace(/background: rgba\(10,132,255,0\.12\); color: var\(--ios-blue\); border: 1px solid rgba\(10,132,255,0\.25\);/g, 
    "background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);");

html = html.replace(/background: rgba\(48,209,88,0\.12\); color: var\(--ios-green\); border: 1px solid rgba\(48,209,88,0\.25\);/g, 
    "background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);");

html = html.replace(/background: rgba\(255,69,58,0\.12\); color: var\(--ios-red\); border: 1px solid rgba\(255,69,58,0\.25\);/g, 
    "background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);");

fs.writeFileSync('index.html', html, 'utf8');
