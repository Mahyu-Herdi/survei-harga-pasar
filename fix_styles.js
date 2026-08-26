const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace hardcoded linear gradients in glass panels/buttons with var(--glass-surface) or var(--glass-base) where appropriate, or just keep them but change border/blur.
// Actually, it's easier to just do targeted regex replaces for the specific requests.
// Request:
// - border: 1px solid var(--glass-border);
// - border-top: 1px solid var(--glass-refraction);
// - background for surface: var(--glass-surface)
// - background for base: var(--glass-base)
// - Text color: #FFFFFF for main, #A1A1AA for sub.

// Let's replace the .btn-top
html = html.replace(/background: linear-gradient[^;]+;\n\s+color: #fff;\n\s+border: 1px solid var\(--glass-border-side\);\n\s+border-top: 1px solid var\(--glass-border-top\);\n\s+border-bottom: 1px solid var\(--glass-border-bottom\);/, 
    `background: var(--glass-surface);\n            color: var(--text-main);\n            border: 1px solid var(--glass-border);\n            border-top: 1px solid var(--glass-refraction);`);

html = html.replace(/color: #fff/g, 'color: var(--text-main)');
html = html.replace(/color: rgba\(255,255,255,0\.6\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255, 255, 255, 0\.6\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255,255,255,0\.5\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255, 255, 255, 0\.5\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255,255,255,0\.4\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255, 255, 255, 0\.4\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255,255,255,0\.3\)/g, 'color: var(--text-sub)');
html = html.replace(/color: rgba\(255, 255, 255, 0\.3\)/g, 'color: var(--text-sub)');

// Update #ui-panel
html = html.replace(/background: linear-gradient[^;]+;\n\s+backdrop-filter: var\(--glass-blur\); -webkit-backdrop-filter: var\(--glass-blur\);\n\s+border-top: 1px solid rgba[^;]+;/, 
    `background: var(--glass-base);\n            backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);\n            border: 1px solid var(--glass-border);\n            border-top: 1px solid var(--glass-refraction);`);

// Update input
html = html.replace(/background: rgba\(0, 0, 0, 0\.25\);\n\s+border: 1px solid rgba[^;]+;\n\s+border-bottom: 1px solid rgba[^;]+;/,
    `background: rgba(0, 0, 0, 0.4);\n            border: 1px solid var(--glass-border);\n            border-top: 1px solid var(--glass-border);`);

// Update .btn-capture
html = html.replace(/\.btn-capture \{ background: linear-gradient[^;]+; color: #000; box-shadow: 0 10px 25px rgba\(255,255,255,0\.25\), inset 0 2px 5px rgba\(255,255,255,0\.8\); border: 1px solid rgba\(255,255,255,0\.8\); \}/,
    `.btn-capture { background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); box-shadow: var(--glass-shadow); backdrop-filter: var(--glass-blur); }`);

// Update .btn-share
html = html.replace(/\.btn-share \{ background: linear-gradient[^;]+; color: #000; margin-bottom: var\(--pi-4\); box-shadow: 0 12px 30px rgba\(255,255,255,0\.3\), inset 0 2px 5px rgba\(255,255,255,0\.9\); border: 1px solid rgba\(255,255,255,1\); \}/,
    `.btn-share { background: var(--glass-surface); color: var(--text-main); margin-bottom: var(--pi-4); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); box-shadow: var(--glass-shadow); backdrop-filter: var(--glass-blur); }`);

// Update .btn-next
html = html.replace(/\.btn-next \{ background: linear-gradient[^;]+; color: var\(--text-main\); border: 1px solid var\(--glass-border-side\); border-top: 1px solid rgba\(255,255,255,0\.4\); backdrop-filter: var\(--glass-blur\); box-shadow: var\(--glass-shadow\); \}/,
    `.btn-next { background: var(--glass-surface); color: var(--text-main); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction); backdrop-filter: var(--glass-blur); box-shadow: var(--glass-shadow); }`);

// Update .ios-modal
html = html.replace(/background: linear-gradient[^;]+; \n\s+border: 1px solid var\(--glass-border-side\);\n\s+border-top: 1px solid rgba\(255, 255, 255, 0\.4\);\n\s+border-bottom: 1px solid rgba\(0, 0, 0, 0\.4\);/,
    `background: var(--glass-base); \n            border: 1px solid var(--glass-border);\n            border-top: 1px solid var(--glass-refraction);`);

// Update .list-item
html = html.replace(/background: linear-gradient[^;]+;\n\s+border-radius: 24px; padding: 20px; margin-bottom: 18px; \n\s+border: 1px solid rgba[^;]+;\n\s+border-top: 1px solid rgba[^;]+;/,
    `background: var(--glass-surface);\n            border-radius: 24px; padding: 20px; margin-bottom: 18px; \n            border: 1px solid var(--glass-border);\n            border-top: 1px solid var(--glass-refraction);`);

// Update .admin-card
html = html.replace(/background: linear-gradient[^;]+;\n\s+border: 1px solid rgba[^;]+; \n\s+border-top: 1px solid rgba[^;]+;/,
    `background: var(--glass-surface);\n            border: 1px solid var(--glass-border); \n            border-top: 1px solid var(--glass-refraction);`);

// .btn-item-normal
html = html.replace(/background: rgba\(255,255,255,0\.1\); border: none;/,
    `background: var(--glass-surface); border: 1px solid var(--glass-border); border-top: 1px solid var(--glass-refraction);`);

// Replace canvas render logic
html = html.replace(/ctx\.filter = 'blur\(40px\) saturate\(200%\) brightness\(0\.8\)';/,
    `ctx.filter = 'blur(12px) saturate(150%)';`);

html = html.replace(/const bgGrad = ctx\.createLinearGradient[^;]+;\n\s+bgGrad\.addColorStop\(0, "rgba\(20, 25, 40, 0\.35\)"\);\n\s+bgGrad\.addColorStop\(1, "rgba\(5, 10, 15, 0\.65\)"\);\n\s+ctx\.fillStyle = bgGrad;/,
    `ctx.fillStyle = "rgba(20, 20, 30, 0.4)";`);

html = html.replace(/const borderGrad = ctx\.createLinearGradient[^;]+;\n\s+borderGrad\.addColorStop\(0, "rgba\(255, 255, 255, 0\.5\)"\);[^\n]+\n\s+borderGrad\.addColorStop\(0\.3, "rgba\(255, 255, 255, 0\.15\)"\);[^\n]+\n\s+borderGrad\.addColorStop\(1, "rgba\(255, 255, 255, 0\.05\)"\);[^\n]+/,
    `const borderGrad = ctx.createLinearGradient(startX, startY, startX, startY + boxH);\n            borderGrad.addColorStop(0, "rgba(255, 255, 255, 0.25)");\n            borderGrad.addColorStop(0.1, "rgba(255, 255, 255, 0.12)");\n            borderGrad.addColorStop(1, "rgba(255, 255, 255, 0.12)");`);

html = html.replace(/ctx\.lineWidth = 3;/, `ctx.lineWidth = 1;`);

fs.writeFileSync('index.html', html, 'utf8');
