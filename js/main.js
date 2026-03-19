// Main JavaScript file for SyntaxWear E-commerce

document.addEventListener('DOMContentLoaded', function() {
    console.log('SyntaxWear E-commerce iniciado');
    
    // Importar módulos
    initializeApp();
});

function initializeApp() {
    // Inicialização do aplicativo
    loadProducts();
    setupEventListeners();
}

function setupEventListeners() {
    // Setup de event listeners globais
    document.addEventListener('click', handleGlobalClick);
}

function handleGlobalClick(event) {
    // Handler global de cliques
    const target = event.target;
    
    if (target.classList.contains('add-to-cart')) {
        const productId = target.dataset.productId;
        addToCart(productId);
    }
}
