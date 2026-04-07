# Roteiro de Produção do Projeto  
**Turma:** 3º B  
**Grupo:** Não informado  
**Projeto:** **Helpy**  

---

## Apresentação do projeto ao grupo

Grupo, a proposta de vocês é criar o **Helpy**, um sistema para **registrar e gerenciar chamadas de suporte técnico** em uma escola ou empresa. Em outras palavras, vocês vão desenvolver uma aplicação que ajude a organizar pedidos de ajuda quando algum computador, impressora, internet, sistema ou equipamento apresentar problema.

Esse é um projeto muito útil porque, em muitos lugares, os pedidos de suporte acontecem de forma desorganizada: alguém fala pessoalmente, outro manda mensagem, outro avisa por papel, e no final o responsável pelo suporte pode esquecer algum problema ou não saber o que precisa resolver primeiro.

O mais importante durante o desenvolvimento é não tentar criar um sistema muito complicado logo no início. O foco do grupo deve ser montar uma aplicação **simples, funcional, clara e organizada**, que resolva o problema principal e possa ser apresentada até agosto.

Vocês não precisam começar com login complexo, banco de dados avançado ou muitas telas. É melhor entregar uma versão simples que cadastre chamados, mostre a lista e permita acompanhar o status, do que imaginar muitas funções e não conseguir terminar.

Durante a produção, o grupo deve dividir tarefas, registrar decisões, revisar o que foi feito e salvar o projeto no GitHub. Isso ajuda a manter o trabalho organizado e mostra a evolução do projeto.

---

## 1. Análise simples da proposta do projeto

O Helpy pretende ser um sistema para organizar os pedidos de suporte técnico. Sempre que surgir um problema com equipamento, sistema ou rede, o usuário poderá registrar um chamado, e esse chamado ficará organizado para consulta e acompanhamento.

### O que esse projeto pretende resolver

O projeto quer resolver a **desorganização no atendimento de problemas técnicos**. Em muitos ambientes, os pedidos de ajuda ficam espalhados e sem controle, o que dificulta saber o que já foi resolvido, o que ainda está pendente e o que precisa de prioridade.

### Problema principal

O problema principal é a **falta de controle sobre chamados de suporte técnico**.

### Objetivo geral da aplicação

O objetivo do sistema é **registrar, organizar e acompanhar chamadas de suporte técnico**, facilitando o trabalho de quem solicita ajuda e de quem resolve os problemas.

### Utilidade do sistema no dia a dia

Esse sistema pode ser útil para:
- registrar problemas técnicos com mais organização;
- acompanhar se o chamado está pendente, em andamento ou resolvido;
- evitar perda de informações;
- ajudar a priorizar atendimentos;
- manter um histórico simples dos problemas.

### Público-alvo

O público-alvo pode ser:
- alunos e funcionários de uma escola;
- técnicos de informática;
- setor de suporte de uma empresa;
- pessoas que precisam registrar e acompanhar problemas técnicos.

### Possíveis funções principais do sistema

O sistema pode ter funções como:
- cadastrar um novo chamado;
- informar nome do solicitante;
- informar local do problema;
- descrever o problema;
- definir prioridade;
- mostrar lista de chamados;
- alterar status do chamado;
- filtrar chamados por situação;
- exibir detalhes de um chamado;
- marcar chamados como resolvidos.

---

## 2. Planejamento geral até agosto

Para o projeto ficar pronto até agosto, o grupo precisa seguir uma ordem lógica de construção. Como o sistema envolve cadastro, listagem e organização de informações, o melhor caminho é começar pelo básico e ir evoluindo aos poucos.

Cada etapa foi pensada para ocupar **2 aulas de 50 minutos**.

### Ordem geral de construção

A ordem recomendada é esta:

1. entender o problema e organizar o grupo;  
2. definir o que o sistema vai cadastrar e mostrar;  
3. levantar requisitos;  
4. escolher tecnologias;  
5. planejar a estrutura da aplicação;  
6. criar o esqueleto inicial;  
7. montar a primeira versão funcional;  
8. salvar e registrar no GitHub;  
9. revisar e melhorar;  
10. preparar a entrega final.

### Visão do desenvolvimento até agosto

A sequência pode seguir este ritmo:

**Abril:** entendimento da proposta, definição das funções e estrutura  
**Maio:** criação da base da aplicação  
**Junho:** interatividade, cadastro e listagem de chamados  
**Julho:** melhorias, organização e GitHub  
**Agosto:** versão final e apresentação

---

## 3. Levantamento de requisitos

### O que são requisitos

Requisitos são as necessidades do projeto. Eles mostram o que o sistema precisa fazer e como ele deve funcionar.

### Diferença entre requisitos funcionais e não funcionais

**Requisitos funcionais** são as funções do sistema.  
Exemplo: cadastrar chamado, listar chamados, mudar status.

**Requisitos não funcionais** são características de qualidade do sistema.  
Exemplo: ser fácil de usar, ter visual organizado, funcionar bem no navegador.

### Quais requisitos esse projeto provavelmente terá

Como o Helpy é um sistema de gerenciamento, ele precisa permitir o cadastro de informações, mostrar listas, organizar chamados e facilitar o acompanhamento dos atendimentos.

### Requisitos funcionais

- O sistema deve permitir cadastrar um novo chamado.
- O sistema deve permitir informar nome do solicitante.
- O sistema deve permitir informar setor, sala ou local do problema.
- O sistema deve permitir descrever o problema técnico.
- O sistema deve permitir informar prioridade.
- O sistema deve mostrar uma lista de chamados cadastrados.
- O sistema deve permitir alterar o status de um chamado.
- O sistema deve permitir visualizar chamados pendentes, em andamento e resolvidos.
- O sistema pode permitir filtrar chamados por prioridade ou situação.
- O sistema pode permitir excluir chamados de teste ou incorretos.

### Requisitos não funcionais

- O sistema deve ter linguagem simples.
- O sistema deve ser fácil de usar.
- O sistema deve ter aparência organizada.
- O sistema deve funcionar no navegador.
- O sistema deve ter arquivos bem organizados.
- O projeto deve ser viável para iniciantes.
- A aplicação deve ser concluída até agosto.
- O sistema deve evitar excesso de complexidade na primeira versão.

---

## 4. Tecnologias indicadas

Para esse projeto, a melhor escolha é usar tecnologias simples e adequadas para iniciantes.

### HTML

HTML serve para criar a estrutura da aplicação: formulário, títulos, tabelas, botões e áreas de exibição dos chamados.

### CSS

CSS serve para organizar a aparência do sistema: cores, alinhamento, espaçamento, destaque de prioridade e status.

### JavaScript

JavaScript serve para dar comportamento ao sistema. Com ele, vocês podem:
- cadastrar chamados;
- mostrar a lista na tela;
- mudar status;
- filtrar registros;
- guardar dados temporariamente.

### LocalStorage

O `localStorage` é uma forma simples de guardar dados no navegador sem precisar usar banco de dados. Para um projeto escolar, isso pode ser suficiente.

### GitHub

GitHub serve para salvar o projeto, registrar a evolução do grupo e mostrar organização.

### Tecnologias recomendadas para este projeto

- HTML
- CSS
- JavaScript
- localStorage
- Git e GitHub
- Editor de código, como VS Code

### Alternativa simples para ambiente escolar

Em vez de criar um sistema com backend e banco de dados real, vocês podem fazer a primeira versão como uma **aplicação web simples**, usando HTML, CSS, JavaScript e `localStorage`. Assim, os chamados ficam salvos no navegador e o projeto continua viável para iniciantes.

### Por que essas tecnologias são boas para esse projeto

Porque são:
- mais fáceis de aprender;
- suficientes para uma boa primeira versão;
- adequadas ao tempo disponível;
- boas para treinar lógica, organização e interface.

---

## 5. Estrutura da aplicação

Como o Helpy é um sistema web simples, ele pode ser organizado da seguinte forma:

```text
helpy/
│
├── index.html
├── chamados.html
├── novo-chamado.html
├── sobre.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── chamados.js
│
├── img/
│   └── logo.png
│
└── README.md
```

### Função de cada parte do sistema

- `index.html`: página inicial do sistema;
- `novo-chamado.html`: tela para cadastrar um chamado;
- `chamados.html`: tela para listar e acompanhar chamados;
- `sobre.html`: explicação do projeto;
- `css/style.css`: aparência do sistema;
- `js/script.js`: funções gerais;
- `js/chamados.js`: lógica de cadastro, listagem e status;
- `img/`: imagens do projeto;
- `README.md`: descrição do sistema no GitHub.

### Organização básica das páginas

Cada página pode ter:
- cabeçalho com nome do sistema;
- menu de navegação;
- conteúdo principal;
- formulário ou lista;
- rodapé.

---

## 6. Esqueleto inicial da aplicação

Esse esqueleto serve apenas como ponto de partida. Ele mostra uma base simples que pode ser adaptada ao projeto real.

### Exemplo de `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Helpy</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <h1>Helpy</h1>
    <p>Gerenciador de chamadas de suporte técnico</p>
  </header>

  <nav>
    <a href="index.html">Início</a>
    <a href="novo-chamado.html">Novo chamado</a>
    <a href="chamados.html">Chamados</a>
    <a href="sobre.html">Sobre</a>
  </nav>

  <main>
    <section class="banner">
      <h2>Organize os pedidos de suporte com mais facilidade</h2>
      <p>
        O Helpy foi criado para registrar, acompanhar e organizar chamados
        de suporte técnico em escolas ou empresas.
      </p>
      <a class="botao" href="novo-chamado.html">Abrir novo chamado</a>
    </section>
  </main>

  <footer>
    <p>Projeto escolar - Turma 3º B</p>
  </footer>

</body>
</html>
```

### Exemplo de `novo-chamado.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo chamado - Helpy</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <h1>Novo Chamado</h1>
  </header>

  <nav>
    <a href="index.html">Início</a>
    <a href="novo-chamado.html">Novo chamado</a>
    <a href="chamados.html">Chamados</a>
  </nav>

  <main>
    <form id="formChamado">
      <label>Nome do solicitante:</label>
      <input type="text" id="nome" required>

      <label>Local:</label>
      <input type="text" id="local" required>

      <label>Problema:</label>
      <textarea id="problema" required></textarea>

      <label>Prioridade:</label>
      <select id="prioridade">
        <option>Baixa</option>
        <option>Média</option>
        <option>Alta</option>
      </select>

      <button type="submit">Salvar chamado</button>
    </form>

    <p id="mensagem"></p>
  </main>

  <script src="js/chamados.js"></script>
</body>
</html>
```

### Exemplo de `chamados.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chamados - Helpy</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <h1>Lista de Chamados</h1>
  </header>

  <nav>
    <a href="index.html">Início</a>
    <a href="novo-chamado.html">Novo chamado</a>
    <a href="chamados.html">Chamados</a>
  </nav>

  <main>
    <section id="listaChamados"></section>
  </main>

  <script src="js/chamados.js"></script>
</body>
</html>
```

### Exemplo de `css/style.css`

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f6f8;
  color: #333;
}

header {
  background-color: #1e88e5;
  color: white;
  text-align: center;
  padding: 20px;
}

nav {
  background-color: #1565c0;
  text-align: center;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

main {
  padding: 20px;
}

form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
}

input, textarea, select, button {
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
}

.botao, button {
  background-color: #1e88e5;
  color: white;
  border: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}
```

### Exemplo de `js/chamados.js`

```javascript
// Lista de chamados salva no navegador
let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

// Cadastrar chamado
const form = document.getElementById("formChamado");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const chamado = {
      nome: document.getElementById("nome").value,
      local: document.getElementById("local").value,
      problema: document.getElementById("problema").value,
      prioridade: document.getElementById("prioridade").value,
      status: "Pendente"
    };

    chamados.push(chamado);
    localStorage.setItem("chamados", JSON.stringify(chamados));

    document.getElementById("mensagem").innerText = "Chamado salvo com sucesso!";
    form.reset();
  });
}

// Mostrar chamados
const lista = document.getElementById("listaChamados");
if (lista) {
  chamados.forEach((chamado, index) => {
    lista.innerHTML += `
      <div class="card">
        <h3>Chamado ${index + 1}</h3>
        <p><strong>Solicitante:</strong> ${chamado.nome}</p>
        <p><strong>Local:</strong> ${chamado.local}</p>
        <p><strong>Problema:</strong> ${chamado.problema}</p>
        <p><strong>Prioridade:</strong> ${chamado.prioridade}</p>
        <p><strong>Status:</strong> ${chamado.status}</p>
      </div>
    `;
  });
}
```

### Ideias simples que podem ser adaptadas

- filtro por prioridade;
- botão para marcar como resolvido;
- destaque de chamados urgentes;
- tela com estatísticas simples;
- campo de observações;
- busca por nome ou local.

---

## 7. Primeira versão do projeto

A primeira versão funcional não precisa estar perfeita. Ela precisa mostrar que o sistema já realiza a tarefa principal do projeto.

### O que deve existir na primeira versão funcional

- página inicial;
- formulário de cadastro de chamado;
- listagem de chamados;
- visual básico organizado;
- armazenamento simples dos dados no navegador;
- navegação entre as páginas.

### O que pode estar simples ou incompleto

- sem login;
- sem banco de dados real;
- sem filtros avançados;
- sem painel administrativo completo;
- visual ainda básico.

### O que é mais importante nessa primeira entrega

O mais importante é que:
- o usuário consiga cadastrar um chamado;
- a lista de chamados apareça;
- o sistema mostre informações básicas;
- a proposta do projeto fique clara.

### Como saber se essa versão já pode ser apresentada

A primeira versão já pode ser mostrada quando:
- o cadastro funciona;
- os dados aparecem na lista;
- a navegação funciona;
- o grupo consegue explicar como o sistema ajuda a organizar o suporte técnico.

---

## 8. Orientação de commit no GitHub

### O que é commit

Commit é um registro de mudança no projeto. É como salvar uma etapa do trabalho com uma mensagem explicando o que foi feito.

### Por que usar GitHub

O GitHub ajuda a:
- guardar o projeto online;
- evitar perda de arquivos;
- acompanhar a evolução do grupo;
- mostrar organização.

### Como criar um repositório

1. Entrar no GitHub.
2. Clicar em **New repository**.
3. Escolher um nome, por exemplo: `helpy`.
4. Criar o repositório.
5. Copiar o link do repositório.

### Como organizar os arquivos antes de enviar

Antes de enviar:
- revisar nomes dos arquivos;
- deixar tudo nas pastas certas;
- remover arquivos repetidos;
- testar o sistema.

### Exemplo de comandos básicos

```bash
git init
git add .
git commit -m "Estrutura inicial do projeto Helpy"
git branch -M main
git remote add origin LINK_DO_REPOSITORIO
git push -u origin main
```

### Comandos para novas atualizações

```bash
git add .
git commit -m "Adiciona cadastro e listagem de chamados"
git push
```

### Exemplos de mensagens de commit

- `Estrutura inicial do projeto Helpy`
- `Cria página inicial`
- `Adiciona formulário de chamado`
- `Implementa listagem de chamados`
- `Adiciona estilo CSS do sistema`
- `Organiza arquivos do projeto`
- `Prepara primeira versão funcional`

### O que deve ser commitado na primeira versão

- `index.html`
- `novo-chamado.html`
- `chamados.html`
- `style.css`
- `chamados.js`
- imagens utilizadas;
- `README.md`

### Exemplo simples de `README.md`

```md
# Helpy

Projeto desenvolvido pela turma 3º B.

## Objetivo
Criar um sistema simples para registrar e gerenciar chamadas de suporte técnico em escola ou empresa.

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- localStorage

## Funcionalidades iniciais
- Cadastro de chamados
- Listagem de chamados
- Organização básica do suporte técnico
```

---

## 9. Roteiro por etapas

Agora vem a parte prática. Essas etapas devem ser feitas em sequência. Cada uma foi pensada para ocupar **2 aulas de 50 minutos**.

---

### Etapa 1 — Entendendo o projeto e organizando o grupo

**Objetivo da etapa**  
Compreender o problema e dividir responsabilidades.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão discutir a proposta, entender como funciona um chamado técnico e organizar quem fará cada parte.

**Explicação simples do conteúdo**  
Antes de programar, é preciso entender como o sistema será usado na prática.

**Passo a passo da execução**
1. Ler a proposta do projeto.
2. Conversar sobre situações em que existe suporte técnico.
3. Definir quais informações um chamado precisa ter.
4. Dividir tarefas entre os integrantes.
5. Registrar as primeiras decisões.

**O que deve ser entregue ao final da etapa**  
Resumo com objetivo do sistema, público-alvo e divisão de tarefas.

**Checklist do grupo**
- [ ] O grupo entendeu a proposta  
- [ ] O público-alvo foi definido  
- [ ] As informações principais do chamado foram escolhidas  
- [ ] As tarefas foram divididas  
- [ ] As decisões foram registradas  

**Dificuldades comuns e como resolver**  
Se surgirem muitas ideias, priorizem as funções básicas do sistema.

**Resultado esperado ao final**  
Grupo organizado e com foco claro do projeto.

---

### Etapa 2 — Definição das funções e telas

**Objetivo da etapa**  
Decidir o que o sistema vai ter.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão escolher as páginas, campos do formulário e ações principais.

**Explicação simples do conteúdo**  
Um bom sistema começa pela definição clara do que precisa existir.

**Passo a passo da execução**
1. Listar telas possíveis.
2. Escolher as telas realmente necessárias.
3. Definir quais campos o chamado terá.
4. Escolher quais funções serão obrigatórias.
5. Registrar a lista final.

**O que deve ser entregue ao final da etapa**  
Lista de telas e funções principais.

**Checklist do grupo**
- [ ] As telas foram definidas  
- [ ] Os campos do chamado foram escolhidos  
- [ ] As funções principais foram registradas  
- [ ] O grupo separou o essencial do extra  

**Dificuldades comuns e como resolver**  
Se parecer muita coisa, cortem funções secundárias da primeira versão.

**Resultado esperado ao final**  
Visão clara do que será desenvolvido.

---

### Etapa 3 — Planejamento visual das páginas

**Objetivo da etapa**  
Desenhar a estrutura das telas.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão rascunhar a página inicial, o formulário e a lista de chamados.

**Explicação simples do conteúdo**  
Essa etapa ajuda a imaginar o sistema antes de programar.

**Passo a passo da execução**
1. Desenhar a página inicial.
2. Desenhar a tela de cadastro.
3. Desenhar a tela da lista de chamados.
4. Definir posição de botões, campos e títulos.
5. Escolher um padrão visual básico.

**O que deve ser entregue ao final da etapa**  
Rascunho simples das telas.

**Checklist do grupo**
- [ ] A página inicial foi desenhada  
- [ ] A tela de cadastro foi desenhada  
- [ ] A tela de listagem foi desenhada  
- [ ] O padrão visual foi pensado  

**Dificuldades comuns e como resolver**  
Façam um desenho simples com caixas e nomes. Não precisam desenhar bonito.

**Resultado esperado ao final**  
Modelo visual pronto para orientar a construção.

---

### Etapa 4 — Montagem da base em HTML

**Objetivo da etapa**  
Criar a estrutura inicial do sistema.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão criar os arquivos e montar as páginas principais.

**Explicação simples do conteúdo**  
HTML organiza tudo o que aparece no sistema.

**Passo a passo da execução**
1. Criar a pasta do projeto.
2. Criar os arquivos principais.
3. Montar a página inicial.
4. Criar a tela de cadastro.
5. Criar a tela de listagem.
6. Inserir menus e links.

**O que deve ser entregue ao final da etapa**  
Estrutura das páginas funcionando no navegador.

**Checklist do grupo**
- [ ] Os arquivos foram criados  
- [ ] A página inicial existe  
- [ ] A tela de cadastro existe  
- [ ] A tela de listagem existe  
- [ ] A navegação funciona  

**Dificuldades comuns e como resolver**  
Revisar nomes dos arquivos e links entre páginas.

**Resultado esperado ao final**  
Base do sistema pronta.

---

### Etapa 5 — Aparência com CSS

**Objetivo da etapa**  
Melhorar o visual do sistema.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão organizar cores, botões, formulários e lista de chamados.

**Explicação simples do conteúdo**  
CSS deixa o sistema mais legível e apresentável.

**Passo a passo da execução**
1. Escolher cores principais.
2. Ajustar fonte e espaçamento.
3. Melhorar o visual do formulário.
4. Estilizar botões.
5. Destacar informações importantes.

**O que deve ser entregue ao final da etapa**  
Sistema com visual organizado.

**Checklist do grupo**
- [ ] O sistema tem padrão visual  
- [ ] O formulário está organizado  
- [ ] Os botões estão visíveis  
- [ ] A leitura da lista está boa  

**Dificuldades comuns e como resolver**  
Evitem exagerar nas cores. Priorizem clareza e organização.

**Resultado esperado ao final**  
Sistema mais agradável de usar.

---

### Etapa 6 — Interatividade com JavaScript

**Objetivo da etapa**  
Fazer o sistema cadastrar e exibir chamados.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão programar o formulário, salvar os dados e mostrar a lista.

**Explicação simples do conteúdo**  
JavaScript vai fazer o sistema funcionar de verdade.

**Passo a passo da execução**
1. Ligar o arquivo JavaScript ao HTML.
2. Capturar os dados do formulário.
3. Criar um objeto chamado.
4. Salvar os dados no `localStorage`.
5. Mostrar a lista na tela.
6. Testar vários cadastros.

**O que deve ser entregue ao final da etapa**  
Cadastro e listagem funcionando.

**Checklist do grupo**
- [ ] O formulário coleta os dados  
- [ ] Os chamados são salvos  
- [ ] Os chamados aparecem na lista  
- [ ] O grupo testou mais de um cadastro  

**Dificuldades comuns e como resolver**  
Revisar nomes de variáveis, IDs dos campos e ligação do arquivo JavaScript.

**Resultado esperado ao final**  
Sistema já realiza sua função principal.

---

### Etapa 7 — Primeira versão funcional

**Objetivo da etapa**  
Juntar tudo em uma versão apresentável.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão revisar páginas, testar funções e corrigir falhas visíveis.

**Explicação simples do conteúdo**  
Essa etapa transforma partes separadas em um projeto real.

**Passo a passo da execução**
1. Revisar todas as páginas.
2. Testar o cadastro.
3. Testar a listagem.
4. Verificar se o visual está organizado.
5. Corrigir erros simples.

**O que deve ser entregue ao final da etapa**  
Primeira versão funcional do Helpy.

**Checklist do grupo**
- [ ] O sistema abre corretamente  
- [ ] O cadastro funciona  
- [ ] A lista funciona  
- [ ] A navegação funciona  
- [ ] O visual está aceitável  

**Dificuldades comuns e como resolver**  
Não tentem perfeição agora. Priorizem funcionamento.

**Resultado esperado ao final**  
Primeira entrega real do projeto.

---

### Etapa 8 — Organização no GitHub

**Objetivo da etapa**  
Salvar e registrar a evolução do projeto.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão organizar arquivos, criar repositório e enviar a primeira versão.

**Explicação simples do conteúdo**  
GitHub serve para guardar o projeto com segurança e organização.

**Passo a passo da execução**
1. Organizar os arquivos.
2. Criar ou acessar conta no GitHub.
3. Criar o repositório.
4. Fazer o primeiro commit.
5. Enviar o projeto.

**O que deve ser entregue ao final da etapa**  
Repositório criado com a primeira versão publicada.

**Checklist do grupo**
- [ ] O repositório foi criado  
- [ ] Os arquivos foram organizados  
- [ ] O commit foi feito  
- [ ] O projeto foi enviado ao GitHub  

**Dificuldades comuns e como resolver**  
Conferir se estão na pasta certa antes de usar os comandos.

**Resultado esperado ao final**  
Projeto salvo online.

---

### Etapa 9 — Revisão e melhorias

**Objetivo da etapa**  
Melhorar clareza, funcionamento e organização.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão revisar textos, campos, layout e possíveis melhorias.

**Explicação simples do conteúdo**  
Depois que o sistema funciona, é hora de melhorar detalhes.

**Passo a passo da execução**
1. Revisar textos e títulos.
2. Corrigir erros de digitação.
3. Melhorar aparência da lista.
4. Ajustar campos do formulário.
5. Se possível, adicionar filtro ou mudança de status.

**O que deve ser entregue ao final da etapa**  
Versão revisada e melhorada do sistema.

**Checklist do grupo**
- [ ] Os textos foram revisados  
- [ ] O layout foi melhorado  
- [ ] O funcionamento foi testado novamente  
- [ ] O sistema está mais claro  

**Dificuldades comuns e como resolver**  
Se faltar tempo, priorizem correção de erros e clareza.

**Resultado esperado ao final**  
Sistema mais pronto para a entrega.

---

### Etapa 10 — Testes finais e apresentação

**Objetivo da etapa**  
Preparar o projeto para a entrega final.

**O que o grupo vai fazer nessas duas aulas**  
Vocês vão testar o sistema, revisar detalhes e organizar a apresentação.

**Explicação simples do conteúdo**  
Apresentar bem também faz parte do projeto.

**Passo a passo da execução**
1. Testar cadastro e listagem.
2. Conferir se as páginas abrem.
3. Revisar aparência e textos.
4. Dividir a fala da apresentação.
5. Treinar a explicação do projeto.

**O que deve ser entregue ao final da etapa**  
Versão final pronta e apresentação organizada.

**Checklist do grupo**
- [ ] O sistema foi testado  
- [ ] As páginas funcionam  
- [ ] O grupo sabe explicar o projeto  
- [ ] A apresentação foi organizada  

**Dificuldades comuns e como resolver**  
Dividam a fala entre os integrantes para deixar a apresentação mais segura.

**Resultado esperado ao final**  
Projeto pronto para entrega em agosto.

---

## Resumo geral das entregas por etapa

**Etapa 1:** definição do problema, público e organização do grupo  
**Etapa 2:** definição das telas, campos e funções  
**Etapa 3:** rascunho das telas  
**Etapa 4:** estrutura do sistema em HTML  
**Etapa 5:** aparência do sistema em CSS  
**Etapa 6:** cadastro e listagem com JavaScript  
**Etapa 7:** primeira versão funcional  
**Etapa 8:** publicação no GitHub  
**Etapa 9:** revisão e melhorias  
**Etapa 10:** testes finais e apresentação

---

## Lista final do que o grupo precisa ter pronto até agosto

- objetivo do projeto bem definido;
- público-alvo definido;
- páginas principais do sistema;
- formulário de cadastro de chamado;
- listagem de chamados funcionando;
- visual organizado;
- navegação entre páginas;
- primeira versão funcional concluída;
- arquivos organizados;
- repositório no GitHub;
- README do projeto;
- versão final revisada;
- apresentação preparada.
