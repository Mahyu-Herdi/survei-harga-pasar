const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// fix switchRekapTab function
html = html.replace(/document\.getElementById\('btn-rekap-tab-saya'\)\.style\.color = '#fff';/g, "document.getElementById('btn-rekap-tab-saya').style.color = '#000000';");
html = html.replace(/document\.getElementById\('btn-rekap-tab-global'\)\.style\.color = '#fff';/g, "document.getElementById('btn-rekap-tab-global').style.color = '#000000';");

// inline HTML
html = html.replace(/id="btn-rekap-tab-saya"[^>]+color: var\(--text-main\);/g, function(m) {
    return m.replace(/color: var\(--text-main\);/, "color: #000000;");
});

html = html.replace(/<button onclick="closeRekap\(\);[^>]+>Login Ulang<\/button>/, function(m) {
    return m.replace(/color:#fff;/, "color:#000000;");
});

fs.writeFileSync('index.html', html, 'utf8');
