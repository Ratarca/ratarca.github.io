# Ícones simples e referências visuais

Guia para criar e editar os símbolos do portfólio. A [direção visual](visual-direction.md) define a paleta e a composição; este documento define a linguagem dos desenhos e registra as referências que orientaram as escolhas.

## Princípio de desenho

Cada ícone deve comunicar uma ideia por meio de uma silhueta reconhecível, um contorno firme e poucos detalhes. O caráter de gravura aparece nas formas, nas pequenas irregularidades e em cortes de tinta. O espaço livre faz parte do desenho.

O teste de leitura é o tamanho real na página. Um símbolo que funciona ampliado também precisa ser identificável dentro do medalhão do atlas, onde a ilustração pode aparecer com cerca de 30 px de largura no celular.

## Usos

| Família | Aplicação | Orientação | Arquivo |
| --- | --- | --- | --- |
| Marca e favicon | Identidade no header e na aba do navegador | RT em contornos vetoriais, com um sol em espiral como ponto. Na aba, combinar sol e teatro de bonecos com poucos traços. | [`rt-sun.svg`](../src/assets/brand/rt-sun.svg), [`favicon.svg`](../public/favicon.svg), [`favicon.ico`](../public/favicon.ico) |
| Ícones funcionais | Contato, redes sociais, navegação e controles | Preservar os símbolos conhecidos e a consistência de tamanho e alinhamento. No layout principal, os links sociais têm alvos de 44 px. | [`Icon.astro`](../src/components/Icon.astro), [`global.css`](../src/styles/global.css) |
| Emblemas ilustrados | Disciplinas do atlas e etapas do fluxo | Uma figura principal e um objeto que ajude a reconhecer seu papel. Usar SVG nativo. | [`SkillEngraving.astro`](../src/components/SkillEngraving.astro), [`WorkflowEngraving.astro`](../src/components/WorkflowEngraving.astro) |
| Composições | Sol, medalhões e palco Agents AI | Organizar os emblemas com espaço, hierarquia e conexões discretas. | Os mesmos componentes de gravura |

## Regras para os emblemas

1. **Começar pela silhueta.** A figura precisa ser reconhecida antes de receber textura, rosto ou ornamento.
2. **Escolher um objeto principal.** Esquadro para planejar, martelo e bloco para construir, lupa com marca de conferência para validar. Cada conjunto explica um papel.
3. **Usar poucos traços internos.** Rostos amplos, olhos simples e roupas com poucos cortes. Hachuras entram em superfícies maiores, como cerâmica, madeira e molduras.
4. **Manter espaço entre as formas.** Cortinas, objetos, rostos, títulos e arestas devem continuar separados no tamanho exibido.
5. **Aplicar a paleta existente.** Papel e carvão sustentam o desenho; barro, areia e ocre entram em áreas contidas. O sol e as cortinas compartilham o barro.
6. **Trabalhar com formas planas.** Contornos, preenchimentos e incisões constroem o volume. O acabamento deve permanecer próximo da impressão em papel.
7. **Manter a cor de estado funcional.** Usar `currentColor` nos contornos e tokens CSS nos preenchimentos para que seleção e animação continuem funcionando.

Como referência de implementação, os emblemas usam `viewBox` de 80 × 80 ou 90 × 90 unidades. Contornos principais geralmente ficam entre 1,8 e 2,8 unidades; detalhes são mais finos. Ajuste pela leitura visual no tamanho final, preservando o peso dos desenhos vizinhos.

## Símbolos atuais

### Marca RT e favicon

- **Header:** RT em carvão e ponto em forma de sol de barro, com doze raios e uma incisão em espiral. As letras são contornos SVG para manter o desenho independente da fonte instalada. O nome Rafael Targino continua ao lado.
- **Aba do navegador:** sol acima de um pequeno palco, cortinas de barro e um boneco de silhueta escura, sobre fundo de papel claro. O favicon usa uma versão simplificada dos mesmos motivos das gravuras.
- O SVG da marca usa tokens CSS com valores da paleta como fallback. O favicon é independente e usa os mesmos valores diretamente; o ICO deve ser regenerado a partir dele em 16, 32 e 48 px. Preserve a leitura no tamanho real e mantenha os links versionados no layout.

### Atlas of capabilities

| Elemento | Figura | Papel visual |
| --- | --- | --- |
| Centro / Problem solving | Sol de barro com incisão em espiral e raios de tinta | Une as cinco disciplinas |
| I / Data | Vaso de cerâmica com cortes claros | Armazenamento e organização |
| II / Backend | Roda de madeira | Mecanismo e funcionamento |
| III / Agentic AI | Pequeno teatro de bonecos, cortinas em terracota e um boneco de luva | Coordenação de agentes |
| IV / Quantitative | Roseta de renda e geometria entrelaçada | Padrão, estrutura e relações |
| V / Architecture | Fachada com telhado e aberturas vazadas | Abrigo e organização de sistemas |

Os numerais I–V pertencem à leitura do atlas. As disciplinas e ferramentas continuam na chave ao lado da ilustração. Ao editar Agentic AI, preserve o sol e os outros quatro emblemas, conforme solicitado pelo usuário.

### Problem to value

| Etapa | Figura |
| --- | --- |
| Problem | Emaranhado de fios |
| Understand | Lente sobre marcas |
| Design | Boneco de luva com esquadro |
| Build | Boneco de luva com martelo e bloco |
| Validate | Boneco de luva com lupa e marca de conferência |
| Solution | Ponte em arco |
| Value | Ramo florido |

Os três bonecos ficam em quadrados de contorno único dentro de um teatro compacto. O letreiro **Agents AI** integra a faixa superior curva; as cortinas ficam recolhidas e amarradas nas laterais. Os nomes das etapas aparecem junto aos desenhos. O fluxo da home usa apenas esses nomes, sem números romanos ou pequenas frases descritivas.

## Conexões e movimento

- As arestas são mais leves que os contornos dos ícones: um traço fino, contínuo e discreto. O atlas conserva seus ramos suavemente curvos.
- No teatro, o triângulo aponta para cima e tem exatamente três arestas retas: **Design → Build → Validate → Design**. Understand e Solution se conectam às bordas do palco.
- A seta é pequena e serve para indicar direção. A conexão deve deixar rostos, objetos e legendas livres.
- A animação começa ao entrar na tela, percorre as conexões e destaca a etapa em execução. Os bonecos da home fazem um gesto curto durante sua etapa. No atlas, a tinta parte do sol e preenche os cinco ramos; após todas as chegadas aos medalhões, o círculo externo se desenha para uni-los. As conexões compartilham um ciclo de 12 segundos e permanecem completas antes de desvanecer. A espiral gira continuamente a cada 30 segundos e o boneco do teatro se move com suavidade.
- Animar o grupo interno da figura mantém molduras, letreiros e legendas estáveis. Preserve os botões estáticos, a pausa fora da tela ou com a aba oculta e o suporte a movimento reduzido.
- Com movimento reduzido, iniciar cada diagrama estático e explicar o motivo. Manter o botão Animated disponível para uma escolha explícita de reprodução, restrita ao desenho atual e sem persistência. Static interrompe o movimento; uma nova ativação da preferência também deve interrompê-lo. As entradas de texto continuam sem animação nessa preferência.

## Referências visuais

| Referência | Origem registrada | Interpretação aplicada ao portfólio |
| --- | --- | --- |
| Xilogravura de paisagem do Nordeste | Imagem enviada pelo usuário: vegetação, sol, caminho e pequena construção, em preto sobre papel claro | Tinta de carvão, cortes claros, sol, formas artesanais e materialidade de impressão |
| Gravuras históricas e científicas | Imagens enviadas pelo usuário: prancha matemática, cavaleiro e cena de combate | Organização de prancha, símbolos, filetes e convivência entre desenho e notação |
| [Anthropic Academy](https://anthropic.skilljar.com/) | Site indicado pelo usuário e ilustrações consultadas | Contornos firmes, silhuetas simples, fundo quente e poucos elementos para facilitar a leitura |
| Teatro de bonecos | Fotos enviadas pelo usuário, incluindo o letreiro “Circo Rapadura” e um teatro de fantoches com cortinas recolhidas | Faixa contínua, cortinas laterais amarradas e personagens com cabeças e gestos claros |
| [Gravura original do projeto](../public/assets/img/sertao-engraving.webp) | Imagem gerada com Imagegen; prompt registrado no [guia visual](visual-direction.md) | Referência persistente para paleta, tinta, paisagem e geometria |
| [Retrato de Rafael](../public/assets/img/profile.jpg) | Fotografia original já presente no projeto | Presença humana e tratamento editorial; detalhes no [guia fotográfico](direcao-fotografica.md) |

As gravuras e fotos de teatro enviadas na conversa estão registradas aqui por descrição; seus autores e URLs de origem não foram informados. A gravura gerada e o retrato possuem arquivos locais vinculados acima.

Para consultar os exemplos específicos da Anthropic observados durante a edição: [maçã e livro — Claude 101](https://cc.sj-cdn.net/instructor/4hdejjwplbrm-anthropic/courses/22npsux5ldfq0/promo-image.1765477665.png) e [janela de código — Claude Code in Action](https://cc.sj-cdn.net/instructor/4hdejjwplbrm-anthropic/courses/3n2veylcj0hl/promo-image.1750989653.svg). A simplificação descrita neste guia é a interpretação adotada para os desenhos originais do portfólio.

## Brief para novas ilustrações

> Criar um emblema SVG editorial com silhueta simples, contorno firme e poucos detalhes, inspirado na materialidade da xilogravura e na clareza de ícones desenhados à mão. Usar a paleta de papel, carvão, barro, areia e ocre do portfólio. Representar uma única função com uma figura e um objeto reconhecível. Preservar espaço livre e legibilidade no tamanho final. Concentrar hachuras em poucas superfícies e manter a composição coerente com os emblemas existentes.

Antes de concluir uma edição, confira a leitura no celular, o encaixe no medalhão ou quadrado, a cor durante a seleção e a integridade dos símbolos fora do escopo da mudança. Atualize este mapa quando o significado de um ícone mudar.
