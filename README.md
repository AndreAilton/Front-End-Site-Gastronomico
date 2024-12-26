## [Link do Projeto](https://andreailton.github.io/Front-End-Site-Gastronomico/)  
[**Site-Restautrante**](https://andreailton.github.io/Front-End-Site-Gastronomico/)


# 🍴 Front-End para Site de Restaurante

Este repositório contém o código do **front-end** de um site para um restaurante, desenvolvido com **React**. Este projeto foi criado para fins de estudos, explorando conceitos modernos de desenvolvimento front-end, como roteamento, gerenciamento de estado e componentes reutilizáveis.

---

## 📁 Estrutura do Projeto

```plaintext
public/                # Arquivos públicos (ícone, index.html)
src/                   # Código-fonte do projeto
  ├── components/      # Componentes reutilizáveis, como Navbar e Footer
  ├── contexts/        # Contextos para gerenciamento de estado global (ex.: carrinho de compras)
  ├── global/          # Arquivos de estilos globais (CSS)
  ├── pages/           # Páginas principais do site
  ├── services/        # Funções auxiliares para requisições ou lógica externa
  ├── main.jsx         # Ponto de entrada do React
  └── routes.jsx       # Configuração de rotas do React Router
```

---

## 🛠 Tecnologias Utilizadas

### **1. React**
- **Descrição:** Biblioteca JavaScript para criação de interfaces de usuário.
- **Uso no projeto:** Construção da interface do usuário com componentes reutilizáveis e reativos.

### **2. React Router**
- **Descrição:** Biblioteca para gerenciamento de rotas no React.
- **Uso no projeto:** Navegação entre diferentes páginas, como o menu, home e contato.

### **3. Context API**
- **Descrição:** Ferramenta do React para gerenciamento de estado global.
- **Uso no projeto:** Gerenciamento do carrinho de compras com o `CartProvider`.

### **4. CSS**
- **Descrição:** Folhas de estilo para estilização do projeto.
- **Uso no projeto:** Definição de estilos globais e layout responsivo.

### **5. Vite**
- **Descrição:** Ferramenta para criação e build de projetos React, focada em velocidade e simplicidade.
- **Uso no projeto:** Ambiente de desenvolvimento rápido e eficiente.

---

## 📂 Detalhes dos Diretórios

### **1. components**
- Componentes reutilizáveis que compõem a interface do usuário.
- Exemplos:
  - **Navbar:** Barra de navegação principal.
  - **Footer:** Rodapé com informações adicionais.

### **2. contexts**
- Arquivo `useCartContext.js` que implementa o **Context API** para:
  - Gerenciar o estado do carrinho de compras.
  - Prover funcionalidades como adicionar e remover itens.

### **3. global**
- Estilos globais da aplicação.
- Arquivo principal: `global.css`.

### **4. pages**
- Páginas principais do site, agrupando componentes específicos de cada seção.
- Exemplos:
  - **Home:** Página inicial.
  - **Menu:** Página de exibição do cardápio.
  - **Contato:** Página de informações de contato.

### **5. services**
- Contém funções auxiliares e serviços, como chamadas para a API do back-end.

### **6. main.jsx**
- Ponto de entrada do React, onde o aplicativo é inicializado.
- Renderiza a árvore de componentes dentro do `#root` no `index.html`.

### **7. routes.jsx**
- Configuração das rotas da aplicação usando **React Router**.
- Gerencia a navegação entre as páginas do site.

---

## 🚀 Como Rodar o Projeto

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- Back-end rodando localmente ou em um servidor acessível.

### **Passo a Passo**
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o projeto:
   ```bash
   npm run dev
   ```

3. Acesse o projeto em:  
   [http://localhost:5173](http://localhost:5173)

---

## 📚 Funcionalidades do Front-End

- **Navbar e Footer:**
  - Navbar com links para navegação entre páginas.
  - Footer com informações úteis e responsividade.

- **Context API:**
  - Gerenciamento do carrinho de compras.
  - Adicionar e remover itens do carrinho com estado global.

- **Roteamento:**
  - Navegação entre páginas, como home, cardápio e contato.

- **Estilização:**
  - Layout responsivo com CSS global e estilização por componentes.

---

## 📝 Observações

Este projeto foi desenvolvido para fins de aprendizado. Não deve ser utilizado em produção sem ajustes adicionais.

---

## 🛡️ Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
```

Se precisar de mais alguma explicação ou detalhes, é só pedir! 😊