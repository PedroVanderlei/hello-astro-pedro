# Arquitetura do Projeto

*(Estrutura técnica, decisões arquiteturais e limites conscientes)*

---

## 1. Princípio arquitetural fundamental

A arquitetura do **Notas de Rodapé** existe para **servir o conteúdo e sua forma**, não para demonstrar sofisticação técnica.

Toda decisão estrutural parte do seguinte princípio:

> **simplicidade estável é preferível a complexidade elegante.**

O projeto evita abstrações prematuras, camadas desnecessárias e otimizações que não estejam claramente justificadas pela experiência de leitura ou pela longevidade do site.

---

## 2. Separação clara de responsabilidades

A arquitetura do projeto distingue explicitamente três camadas:

1. **Conteúdo**
2. **Estrutura editorial**
3. **Infraestrutura técnica**

Essas camadas **não devem se confundir**.

---

## 3. Conteúdo

### 3.1 O que é considerado conteúdo

Conteúdo inclui:

- textos publicados (posts);
- páginas institucionais (About, etc.);
- séries e textos associados;
- materiais destinados à leitura direta.

Conteúdo **não é rascunho**.  
Todo material cru permanece fora do site (ex.: Obsidian).

---

### 3.2 Forma do conteúdo

O conteúdo pode existir como:

- Markdown;
- MDX;
- páginas Astro simples.

A escolha entre essas formas **não é ideológica**, mas pragmática:

- priorizar o que já existe;
- evitar refatorações sem ganho claro;
- manter o mínimo de acoplamento possível.

---

## 4. Estrutura editorial

A estrutura editorial define **como o conteúdo se organiza**, não o que ele diz.

Ela inclui:

- Home como portal de orientação;
- páginas institucionais como âncoras;
- posts como unidade básica;
- séries como percursos guiados;
- temas como campos semânticos;
- grafos como relações editoriais.

Essa estrutura é **conceitual antes de ser técnica**.

---

## 5. Home (Página inicial)

A home:

- não é feed;
- não é índice cronológico;
- não tenta listar tudo.

Funções da home:

- apresentar o espírito do site;
- orientar sem empurrar;
- sugerir caminhos possíveis;
- funcionar como ponto de passagem, não de encerramento.

A home pode mudar ao longo do tempo, mas **não deve perder sua função de portal**.

---

## 6. Posts

Posts são a **unidade central do site**.

Características:

- funcionam de forma autônoma;
- não dependem de leitura prévia;
- podem existir fora de séries;
- podem atravessar múltiplos temas.

A arquitetura não força hierarquia rígida sobre o post.

---

## 7. Séries

Séries são **percursos editoriais intencionais**.

- pressupõem ordem;
- possuem começo, meio e fim (mesmo que aberto);
- exigem responsabilidade autoral.

Posts pertencem a séries.  
Séries pertencem a temas.

Séries são **exceções deliberadas** à navegação livre.

---

## 8. Temas

Temas funcionam como **campos semânticos**, não como categorias rígidas.

- não são gavetas;
- não controlam o post;
- não precisam ser completos ou equilibrados.

Eles emergem da leitura e da relação entre textos.

---

## 9. Grafos

Grafos representam as **relações editoriais** entre:

- posts;
- séries;
- temas;
- conceitos recorrentes.

Características dos grafos:

- não são automáticos;
- não são exaustivos;
- não são algorítmicos;
- não são exibidos integralmente ao leitor.

Toda relação deve ser **editorialmente justificável**.

Grafos podem ser representados tecnicamente (ex.: Mermaid), mas **sua lógica é conceitual**.

---

## 10. Navegação

A navegação do site é:

- lenta;
- previsível;
- silenciosa;
- não ansiosa.

Ela evita:

- feeds infinitos;
- “conteúdos relacionados” automáticos;
- estímulos agressivos;
- hierarquias confusas.

Navegar é um ato formativo.

---

## 11. SEO como camada silenciosa

SEO é tratado como **infraestrutura**, não como motor do site.

Decisões arquiteturais sobre SEO:

- manter o que já funciona;
- não remover camadas existentes;
- não introduzir complexidade sem ganho real;
- priorizar discoverability sem distorcer conteúdo.

SEO nunca governa a arquitetura editorial.

---

## 12. Estabilidade acima de refatoração

Refatorações são aceitáveis apenas quando:

- corrigem erro real;
- reduzem complexidade;
- melhoram clareza estrutural;
- aumentam longevidade do projeto.

Refatorar “por elegância” não é objetivo.

---

## 13. Crescimento incremental

A arquitetura cresce por:

- adição consciente;
- validação progressiva;
- revisão periódica.

Não existe roadmap rígido de features.

Cada camada nova deve:

- respeitar as anteriores;
- não quebrar o que já funciona;
- não alterar o espírito do site.

---

## 14. Relação com ferramentas externas

Frameworks, bibliotecas e ferramentas são:

- meios;
- substituíveis;
- secundários à forma do conteúdo.

A arquitetura não deve ficar refém de:
- modismos;
- hype técnico;
- dependências frágeis.

---

## 15. Encerramento

A arquitetura do **Notas de Rodapé** é:

- simples;
- deliberada;
- silenciosa;
- resistente ao tempo.

Ela não busca impressionar.
Ela busca **permanecer fiel**.

Se uma solução técnica contradiz a forma do projeto,
então **não é a solução correta**.
