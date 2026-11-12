# Orientações do projeto

## Direção visual

Antes de editar cores, fotografias ou composição, consulte:

- [`docs/visual-direction.md`](docs/visual-direction.md) para paleta, tipografia, xilogravura e estilo editorial.
- [`docs/iconografia-e-referencias.md`](docs/iconografia-e-referencias.md) para ícones simples, significado dos símbolos, referências e brief de desenho.
- [`docs/direcao-fotografica.md`](docs/direcao-fotografica.md) para o retrato de referência e a direção para futuras fotos.

O conceito reúne sertão nordestino, cidade e tecnologia, com referências a xilogravura, literatura de cordel e gravura científica. A paleta usa papel quente, carvão, barro, verde mandacaru e ocre. A textura gráfica pertence à página; fotos pessoais devem continuar naturais e reconhecíveis.

Use os tokens de `src/styles/global.css`. A paleta completa, suas combinações e uma prancha de cores estão no guia visual. Os ícones usam silhueta clara, contorno firme, poucos traços internos e SVG nativo. A Anthropic Academy orienta a clareza dos desenhos; a xilogravura e os teatros de bonecos orientam a linguagem e a composição. As fontes estão no guia de iconografia.

A marca interativa do header fica em `BrandWordmark.astro`: começa em RT grande e sem moldura, com o sol de `SunMark.astro` no lugar do ponto. No hover ou foco pelo teclado, as letras se expandem suavemente para revelar Rafael Targino, com o sol no final. A área reservada mantém o menu imóvel. Em telas de toque, preserve o link direto para a home. Com movimento reduzido, a troca de estado é instantânea. `src/assets/brand/rt-sun.svg` continua disponível como versão estática para exportação. O favicon combina o sol com um teatro de bonecos em `public/favicon.svg`. Ao editá-lo, regenere também `public/favicon.ico` com versões de 16, 32 e 48 px. Confira a leitura nesses tamanhos e atualize o parâmetro de versão dos links em `BaseLayout.astro` quando mudar o favicon.

## Desenhos e diagramas

- **Atlas:** sol em espiral no centro; cerâmica, roda de madeira, teatro de bonecos, renda e fachada vazada nos cinco medalhões. Agentic AI usa um pequeno palco com cortinas em terracota e um boneco de luva. Ao editar esse símbolo, preserve o sol e as outras quatro figuras. O atlas mantém os numerais I–V e as conexões finas.
- **Connected capability:** fundo verde oliva/mandacaru igual à faixa de contato da home; título claro, ênfases em ocre e texto de apoio em areia. A prancha do atlas permanece em papel claro, com seus desenhos e controles na paleta original.
- **Labs:** Open to collaboration compartilha esse fundo verde oliva, com texto claro e botão sobre papel claro.
- **Sequência do atlas:** a tinta parte do sol e preenche os cinco ramos com pequenas defasagens. Somente após todos alcançarem os medalhões, desenhe o círculo externo que os une. Ramos e círculo compartilham um ciclo de 12 segundos, com pausa para leitura antes de reiniciar. A espiral gira continuamente, com uma volta a cada 30 segundos.
- **Home:** sete ilustrações em molduras quadradas, com nomes das etapas e sem números romanos ou subtítulos. Design, Build e Validate são bonecos de luva com esquadro, martelo e bloco, e lupa com marca de conferência.
- **Palco da home:** compacto, com faixa curva “Agents AI”, cortinas recolhidas nas laterais e molduras dos bonecos de contorno único. O triângulo aponta para cima: Design no topo, Build embaixo à direita e Validate embaixo à esquerda.
- **Fluxo:** exatamente três arestas internas retas, Design → Build → Validate → Design. Understand e Solution se conectam às bordas do palco. As arestas, o letreiro e as cortinas deixam os desenhos e as legendas livres.
- As referências regionais aparecem nas ilustrações e na paleta. Os títulos e as legendas descrevem as competências e as etapas.
- As animações da home e do atlas iniciam ao entrar na tela e pausam fora dela ou com a aba oculta. Os bonecos fazem gestos discretos; molduras e legendas ficam estáveis. Com movimento reduzido, os diagramas começam estáticos, mas o botão Animated permite iniciar o desenho por escolha explícita. Essa escolha vale apenas para o diagrama atual e não é persistida. Preserve os botões estáticos, esse padrão de movimento reduzido e a leitura sem JavaScript.

## Conteúdo

- Preserve textos, idioma, dados, projetos, imagens de projetos, links e comportamento existentes durante ajustes visuais.
- O conteúdo compartilhado do perfil, experiência, formação, habilidades e projetos fica em `src/data/site.ts`.
- Não invente experiências, clientes, métricas, citações ou credenciais.

## Home e imagens

- `public/assets/img/profile.jpg` é a foto original de Rafael e o retrato principal na home. Mantenha o arquivo original como referência; o tratamento visual atual é aplicado no CSS.
- O bloco da foto mantém a localização “Based in — São Paulo, BR” e os links sociais.
- Não coloque miniaturas de gravura no bloco “Based in”.
- `public/assets/img/sertao-engraving.webp` é a ilustração de referência do projeto. Consulte a documentação antes de reutilizá-la.
- Preserve os textos alternativos descritivos das imagens.

## Implementação

- O projeto usa Astro com páginas estáticas. Mantenha a responsividade e os controles acessíveis por teclado.
- Preserve `build.inlineStylesheets: 'always'` em `astro.config.mjs`: o CSS do projeto acompanha cada HTML. Isso evita que uma página em cache perca a formatação ao apontar para um arquivo CSS com hash removido na publicação seguinte do GitHub Pages.
- Tokens de cor, tipografia e a maior parte do CSS global vivem em `src/styles/global.css`.
- Ao mudar uma cor ou o significado de um símbolo, atualize os guias correspondentes e o resumo do README.
- Para alterações no projeto, execute `npm run build`.
