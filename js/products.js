// Gerenciamento de produtos

let products = [];

async function loadProducts() {
  try {
    const response = await fetch("./data/products.json");
    products = await response.json();
    renderProducts();
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

function renderProducts() {
  const productContainer = document.getElementById("products-container");
  if (!productContainer) return;

  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category || "outros";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  productContainer.innerHTML = Object.keys(groupedProducts)
    .map(
      (category) => `
        <div class="products-category">
            <div class="section-header">
                <h3>${formatCategoryTitle(category)}</h3>
            </div>
            <div class="products-grid">
                ${groupedProducts[category]
                  .map(
                    (product) => `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                        <button class="add-to-cart" data-product-id="${product.id}">
                            Adicionar ao Carrinho
                        </button>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");
}

function formatCategoryTitle(category) {
  const titles = {
    camisetas: "Camisetas",
    acessorios: "Acessórios",
    meias: "Meias",
    moletom: "Moletons",
    outros: "Outros",
  };
  return (
    titles[category] || category.charAt(0).toUpperCase() + category.slice(1)
  );
}

function getProductById(id) {
  return products.find((product) => product.id === parseInt(id));
}
