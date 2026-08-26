const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/background: linear-gradient\(135deg, #0a84ff, #005bb5\); box-shadow: 0 8px 16px var\(--ios-blue-glow\);/g, 
    `background: rgba(10, 132, 255, 0.2); border: 1px solid rgba(10, 132, 255, 0.4); border-top: 1px solid rgba(10, 132, 255, 0.6); box-shadow: 0 8px 16px rgba(10, 132, 255, 0.2); color: #fff;`);

html = html.replace(/background: linear-gradient\(135deg, #30d158, #24a144\); color: var\(--text-main\); box-shadow: 0 8px 16px rgba\(48, 209, 88, 0\.3\);/g, 
    `background: rgba(48, 209, 88, 0.2); border: 1px solid rgba(48, 209, 88, 0.4); border-top: 1px solid rgba(48, 209, 88, 0.6); color: #fff; box-shadow: 0 8px 16px rgba(48, 209, 88, 0.2);`);

fs.writeFileSync('index.html', html, 'utf8');
