function adjustButtonContrast() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        const style = window.getComputedStyle(btn);
        let bg = style.backgroundColor;
        let bgImg = style.backgroundImage;
        let r, g, b;
        
        const extractRGB = (str) => {
            let match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
            match = str.match(/#([0-9a-fA-F]{3,6})/);
            if (match) {
                let hex = match[1];
                if (hex.length === 3) hex = hex.split('').map(c => c+c).join('');
                return [parseInt(hex.substring(0,2), 16), parseInt(hex.substring(2,4), 16), parseInt(hex.substring(4,6), 16)];
            }
            return null;
        };

        let rgb = extractRGB(bg);
        if (!rgb || bg === 'rgba(0, 0, 0, 0)' || parseFloat(bg.replace(/[^,]+,[^,]+,[^,]+,([^)]+).*/, '$1')) < 0.1) {
            if (bgImg && bgImg.includes('gradient')) {
                rgb = extractRGB(bgImg);
            }
        }
        
        if (rgb) {
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
            if (luminance > 0.6) {
                btn.style.color = '#000000'; 
                // also fix SVG strokes if they are explicitly set
            } else {
                btn.style.color = '#ffffff'; 
            }
        }
    });
}
