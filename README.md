# Windows 10 Clone - Interface Web

![Windows 10 Logo](https://raw.githubusercontent.com/user-attachments/files/16723238/windows-logo-blue.png)

## 📜 Sobre o Projeto

Este projeto é uma recriação da interface do usuário (UI) do sistema operacional Windows 10, desenvolvida utilizando apenas tecnologias web front-end: HTML, CSS e JavaScript puro (Vanilla JS). O objetivo é simular a aparência e a interatividade do ambiente de trabalho do Windows, incluindo a barra de tarefas, menu iniciar e ícones do sistema, como um exercício de desenvolvimento e design.

![Prévia do Projeto]((https://raw.githubusercontent.com/fellipedepalma/windows10Desktop/refs/heads/master/Windows10.png))
![Prévia do Projeto](https://raw.githubusercontent.com/fellipedepalma/windows10Desktop/refs/heads/master/Windows10_iniciar.png)

---

## ✨ FUNCIONALIDADES IMPLEMENTADAS

* **Ambiente de Trabalho:** Tela principal com papel de parede e ícones.
* **Barra de Tarefas Fixa:**
    * Layout responsivo com `Flexbox`.
    * Efeito de translucidez similar ao *Fluent Design* do Windows.
* **Menu Iniciar Interativo:**
    * Ativado ao passar o mouse sobre o ícone do Windows.
    * Estrutura dividida em acesso rápido, lista de programas e blocos dinâmicos (Live Tiles).
* **Área de Notificação (System Tray):**
    * **Relógio e Data em Tempo Real:** Atualizados a cada segundo.
    * **Status de Conexão de Rede:** Utiliza a `Navigator API` do browser para detectar e exibir o status da conexão de internet.
    * Ícones estáticos para som, notificações e "mostrar ícones ocultos".
* **Efeitos de Hover:** Feedback visual ao passar o mouse sobre elementos interativos, como ícones e botões.

---

## 🛠️ TÉCNOLOGIAS IMPLEMENTADAS

Este projeto foi construído sem o uso de frameworks, focando nos fundamentos do desenvolvimento web:

* **HTML5:** Para a estruturação semântica do conteúdo.
* **CSS3:** Para toda a estilização, layout (com Flexbox) e efeitos visuais.
* **JavaScript (ES6+):** Para a interatividade, manipulação do DOM, relógio em tempo real e detecção de rede.

---

## 🚀 COMO EXECUTAR O PROJETO

Como este é um projeto estático (não necessita de um servidor ou processo de build), você pode executá-lo facilmente:

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Abra o arquivo `index.html` no seu navegador de preferência.**

E pronto! A interface do Windows 10 estará rodando localmente.

---

## 📂 Estrutura de Arquivos

O projeto está organizado da seguinte forma para manter a separação de responsabilidades:

```
/
├── index.html                # Arquivo principal com a estrutura da página
└── vendor/
    ├── assets/               # Pasta para todas as imagens e ícones
    ├── css/
    │   ├── barradetarefas.css  # Estilos específicos da barra de tarefas
    │   └── windows.css         # Estilos globais e do desktop
    └── js/
        ├── conexaoRede.js      # Lógica para o status da conexão
        └── dataHora.js         # Lógica para o relógio e data
```

---

## 🔮 MELHORIAS FUTURAS

Este projeto é uma base sólida que pode ser expandida com novas funcionalidades:

-   [ ] **Funcionalidade de Clique no Menu Iniciar:** Alterar o comportamento de `hover` para `click` para abrir/fechar o menu.
-   [ ] **Janelas Funcionais:** Fazer com que os ícones abram `divs` que simulem janelas (que possam ser arrastadas, redimensionadas e fechadas).
-   [ ] **Painel de Notificações:** Implementar a lógica do painel de notificações ao clicar no ícone.
-   [ ] **Ícones da Barra de Tarefas:** Adicionar ícones de aplicativos "abertos" na barra de tarefas.
-   [ ] **Refatoração do Código:** Modularizar o JavaScript e otimizar o CSS.

---

## 👨‍💻 Autor

Feito por **[Fellipe de Palma]**.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fellipedepalma/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/fellipedepalma)
