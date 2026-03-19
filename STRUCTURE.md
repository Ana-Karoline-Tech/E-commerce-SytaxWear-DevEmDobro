# Estrutura do Projeto SyntaxWear E-commerce

## 📁 Estrutura de Diretórios

```
e-commerceSytaxWear/
├── assets/
│   ├── icons/          # Ícones da aplicação
│   └── images/         # Imagens dos produtos
├── components/         # Componentes HTML reutilizáveis
│   ├── header.html
│   ├── footer.html
│   └── product-card.html
├── css/
│   └── style.css       # Estilos globais
├── data/
│   └── products.json   # Dados dos produtos
├── js/
│   ├── main.js         # Arquivo principal
│   ├── products.js     # Lógica de produtos
│   └── cart.js         # Lógica do carrinho
├── pages/
│   └── cart.html       # Página do carrinho
├── .gitignore
├── index.html          # Página principal
├── package.json
└── README.md           # Este arquivo
```

## 🚀 Como Executar

### Opção 1: Usando Python
```bash
python -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador.

### Opção 2: Abrir Direto
Basta abrir o arquivo `index.html` no navegador.

## 📋 Funcionalidades

- ✅ Página inicial com produtos em destaque
- ✅ Grid responsivo de produtos
- ✅ Carrinho de compras com localStorage
- ✅ Sistema de adicionar/remover produtos
- ✅ Design moderno e responsivo
- ✅ Estrutura escalável

## 🎨 Personalização

### Cores Principais
- Primária: `#6c5ce7` (Roxo)
- Secundária: `#0984e3` (Azul)
- Fundo: `#f5f6fa` (Cinza claro)

### Adicionar Novos Produtos
1. Edite `data/products.json`
2. Adicione novas imagens em `assets/images/`
3. As imagens aparecerão automaticamente na página

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript (ES6+)
- localStorage para persistência de dados

## 📝 Próximas Etapas

- [ ] Integração com API de pagamento
- [ ] Sistema de checkout completo
- [ ] Autenticação de usuário
- [ ] Página de detalhes do produto
- [ ] Sistema de filtros e busca
- [ ] Comentários e avaliações de produtos

## 👤 Autor

SyntaxWear - E-commerce de Roupas e Acessórios para Desenvolvedores

## 📄 Licença

MIT
