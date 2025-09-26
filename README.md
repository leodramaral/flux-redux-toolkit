# Flux - Redux Toolkit

## 💡 Sobre o Projeto

Aplicação de controle financeiro pessoal, construída com React, Redux Toolkit e diversas bibliotecas modernas para UI, gráficos e persistência de dados. Permite ao usuário cadastrar contas bancárias, transações, visualizar orçamento diário, metas financeiras e gastos por categoria.

---

## 📦 Principais Bibliotecas Utilizadas

### Frontend & UI
- **React**: Biblioteca principal para construção de interfaces.
- **React DOM**: Renderização dos componentes React no navegador.
- **React Router DOM**: Navegação entre páginas (Login, Home).
- **PrimeReact**: Componentes visuais prontos (Cards, Buttons, Dialogs, Inputs, Charts).
- **TailwindCSS**: Estilização rápida e responsiva via classes utilitárias.

### Estado & Persistência
- **Redux Toolkit**: Gerenciamento de estado global simplificado.
- **React Redux**: Integração do Redux com componentes React.
- **Redux Persist**: Persistência automática do estado no localStorage.

### Formulários & Validação
- **React Hook Form**: Gerenciamento e validação de formulários de forma performática.

### Gráficos
- **Chart.js**: Biblioteca para renderização de gráficos.
- **PrimeReact Chart**: Wrapper para uso de Chart.js com componentes PrimeReact.

### Build & Ferramentas
- **Vite**: Bundler moderno para desenvolvimento rápido e build otimizado.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **ESLint**: Padronização e análise de código.

---

## 🛠️ Estrutura de Desenvolvimento

- **src/components/**: Componentes visuais reutilizáveis (Cards, Forms, Charts).
- **src/views/**: Páginas principais (Login, Home).
- **src/redux/**: Slices, store, selectors e persistência do estado.
- **public/**: Assets estáticos.
- **index.html / main.tsx**: Bootstrap da aplicação.

### Principais Processos
- Cadastro de usuário e objetivo financeiro.
- Cadastro de contas bancárias e transações.
- Cálculo automático do orçamento diário e metas.
- Visualização de gastos por categoria com agrupamento dinâmico.
- Persistência dos dados entre sessões.

---

## 🚀 Como Rodar a Aplicação

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
3. **Acesse no navegador:**
   [http://localhost:5173](http://localhost:5173)

---

## 📚 Scripts Úteis
- `npm run dev` — Inicia o ambiente de desenvolvimento.
- `npm run build` — Gera o build de produção.
- `npm run preview` — Visualiza o build localmente.
- `npm run lint` — Analisa o código com ESLint.

---

## 📝 Licença
MIT
