// Configurações globais da aplicação

const config = {
    // API URLs
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    paymentApi: process.env.PAYMENT_API || 'https://api.payment.com',
    
    // Locale e Moeda
    locale: 'pt-BR',
    currency: 'BRL',
    
    // Configurações de eCommerce
    ecommerce: {
        taxRate: 0.15,  // 15% de imposto
        shippingCost: 10.00,
        freeShippingAbove: 100.00,
        itemsPerPage: 12
    },
    
    // Temas
    theme: {
        primary: '#6c5ce7',
        secondary: '#0984e3',
        success: '#00b894',
        danger: '#d63031',
        warning: '#fdcb6e'
    },
    
    // Mensagens
    messages: {
        addedToCart: 'Produto adicionado ao carrinho!',
        removedFromCart: 'Produto removido do carrinho.',
        cartEmpty: 'Seu carrinho está vazio.',
        loadingError: 'Erro ao carregar dados. Tente novamente.",
        success: 'Operação realizada com sucesso!',
        error: 'Ocorreu um erro. Tente novamente.'
    }
};

export default config;
