const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update JS for admin filter
html = html.replace(/activeBtn\.style\.color = '#fff';/g, "activeBtn.style.color = '#000000';");

// Update inline styles for btn-filter-all
html = html.replace(/<button id="btn-filter-all"[^>]+>Semua Waktu<\/button>/, function(match) {
    return match.replace(/color: var\(--text-main\);/, "color: #000000;");
});

// Update inline styles for btn-rg-filter-all
html = html.replace(/<button id="btn-rg-filter-all"[^>]+>Semua Waktu<\/button>/, function(match) {
    return match.replace(/color: var\(--text-main\);/, "color: #000000;");
});

// While we're at it, let's just make sure we re-apply the auto-contrast observer? No, CSS is faster and less buggy if we just manually fix the known elements. 
// Are there any other buttons with var(--ios-blue) background? 
fs.writeFileSync('index.html', html, 'utf8');
