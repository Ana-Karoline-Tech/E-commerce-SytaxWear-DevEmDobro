// Gerenciamento de produtos

let products = [];

async function loadProducts() {
    try {
        const response = await fetch('./data/products.json');
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

function renderProducts() {
    const productContainer = document.getElementById('products-container');
    if (!productContainer) return;
    
    productContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-product-id="${product.id}">
                Adicionar ao Carrinho
            </button>
        </div>
    `).join('');
}

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}
