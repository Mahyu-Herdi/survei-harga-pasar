const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    mutations.forEach(m => {
        if (m.type === 'childList') {
            m.addedNodes.forEach(n => {
                if (n.nodeType === 1 && (n.classList.contains('btn') || n.querySelector('.btn'))) shouldUpdate = true;
            });
        } else if (m.type === 'attributes' && m.target.classList.contains('btn') && (m.attributeName === 'style' || m.attributeName === 'class')) {
            shouldUpdate = true;
        }
    });
    if (shouldUpdate) adjustButtonContrast();
});
