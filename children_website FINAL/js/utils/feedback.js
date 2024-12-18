const feedback = {
    showSuccess: (element, message) => {
        element.textContent = `🎉 ${message}`;
        element.style.color = '#4ecdc4';
    },
    
    showError: (element, message) => {
        element.textContent = `❌ ${message}`;
        element.style.color = '#ff6b6b';
    },
    
    clear: (element) => {
        element.textContent = '';
    }
};