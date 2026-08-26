const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Button "Bagi Laporan" (blueish)
html = html.replace(/background: rgba\(10, 132, 255, 0\.2\); border: 1px solid rgba\(10, 132, 255, 0\.4\); border-top: 1px solid rgba\(10, 132, 255, 0\.6\); box-shadow: 0 8px 16px rgba\(10, 132, 255, 0\.2\);/g, 
    "background: var(--glass-surface); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); box-shadow: var(--glass-shadow); backdrop-filter: var(--glass-blur);");

// Button "Salin Teks WA" / "Export Excel" (greenish)
html = html.replace(/background: rgba\(48, 209, 88, 0\.2\); border: 1px solid rgba\(48, 209, 88, 0\.4\); border-top: 1px solid rgba\(48, 209, 88, 0\.6\); color: #fff; box-shadow: 0 8px 16px rgba\(48, 209, 88, 0\.2\);/g, 
    "background: var(--glass-surface); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); color: var(--text-main); box-shadow: var(--glass-shadow); backdrop-filter: var(--glass-blur);");

// Button Export PDF (redish)
html = html.replace(/background: rgba\(255, 69, 58, 0\.15\); border: 1px solid rgba\(255, 69, 58, 0\.35\); color: #ff453a;/g, 
    "background: var(--glass-surface); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); color: var(--text-main); backdrop-filter: var(--glass-blur);");

// Button Export Excel (greenish)
html = html.replace(/background: rgba\(48, 209, 88, 0\.15\); border: 1px solid rgba\(48, 209, 88, 0\.35\); color: #30d158;/g, 
    "background: var(--glass-surface); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); color: var(--text-main); backdrop-filter: var(--glass-blur);");

// Button "Grafik Tren"
html = html.replace(/background:rgba\(10,132,255,0\.12\); color:var\(--ios-blue\); border:1px solid rgba\(10,132,255,0\.2\);/g, 
    "background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);");

// Button "Bagikan"
html = html.replace(/background:rgba\(48,209,88,0\.12\); color:#30d158; border:1px solid rgba\(48,209,88,0\.2\);/g, 
    "background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);");

// Button "Hapus"
html = html.replace(/background:rgba\(255,69,58,0\.1\); color:var\(--ios-red\); border:1px solid rgba\(255,69,58,0\.2\);/g, 
    "background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);");

fs.writeFileSync('index.html', html, 'utf8');
