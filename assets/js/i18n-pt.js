/* ==========================================================================
   Português (páginas em /pt/)
   --------------------------------------------------------------------------
   Só é carregado pelas páginas de /pt/. O projects.js aplica estas traduções
   aos projetos, áreas e diapositivos; o ui.js/area.js/main.js usam RN_PT.ui
   para os textos que gera em JavaScript.

   Para traduzir um projeto novo basta acrescentar o título em "titles" e,
   se quiseres, a descrição em "descriptions". O que não estiver aqui fica
   em inglês.
   ========================================================================== */
window.RN_PT = {
  /* Etiquetas dos filtros. A chave é o valor interno (não traduzido), para os
     links ?sector= continuarem a funcionar nas duas línguas. */
  sectors: {
    "Business": "Empresas",
    "Corporate": "Corporate",
    "Real estate": "Imobiliário",
    "Music": "Música",
    "Editorial": "Editorial",
    "Identity": "Identidade",
    "Motion graphics": "Motion graphics",
    "Titles": "Genéricos",
    "Logos": "Logótipos",
    "Musical": "Musical",
    "Social": "Redes sociais",
    "INCANTO": "INCANTO"
  },

  categories: {
    video: "Vídeo",
    photo: "Fotografia",
    design: "Design",
    motion: "Motion"
  },

  areas: {
    video: {
      label: "Vídeo",
      blurb: "Videoclipes, aftermovies corporate e conteúdo para redes sociais — captados e editados do início ao fim."
    },
    photo: {
      label: "Fotografia",
      blurb: "Concertos, restaurantes, retratos de equipa e editorial — cada sessão abre como um conjunto completo."
    },
    design: {
      label: "Design",
      blurb: "Logótipos e sistemas de identidade, da marca ao merch onde ela vive."
    },
    motion: {
      label: "Motion",
      blurb: "Genéricos, logótipos animados e explainers pensados para qualquer ecrã."
    }
  },

  /* Partes de funções, separadas por " · " (ex.: "Camera · Edit") */
  roles: {
    "Camera": "Câmara",
    "Edit": "Edição",
    "Direction": "Realização",
    "Production": "Produção",
    "Photography": "Fotografia",
    "Retouch": "Retoque",
    "Real estate photography": "Fotografia de imobiliário",
    "Corporate event": "Evento corporate",
    "Event": "Evento",
    "Live": "Ao vivo",
    "Studio": "Estúdio",
    "Portrait": "Retrato",
    "Identity": "Identidade",
    "Logo design": "Design de logótipo",
    "Logo": "Logótipo",
    "Merch": "Merch",
    "Motion design": "Motion design",
    "Animation": "Animação",
    "Short form": "Formato curto"
  },

  /* Títulos. "Real Estate" fica em inglês de propósito. */
  titles: {
    "Real Estate — Portfolio": "Real Estate — Portfolio",
    "Century21 — Agent Portraits": "Century21 — Retratos de Consultores",
    "Rimar — Seaside Restaurant": "Rimar — Restaurante à Beira-mar",
    "Sintrense — Team Portraits": "Sintrense — Retratos de Equipa",
    "U.Dance — Dance Event": "U.Dance — Evento de Dança",
    "Almanossa — Live": "Almanossa — Ao Vivo",
    "Moda & Poses — Seaside": "Moda & Poses — Beira-mar",
    "Djereny — Black & White": "Djereny — Preto e Branco",
    "Calculame.pt — Logo & Icon": "Calculame.pt — Logótipo e Ícone",
    "Incanto Concerts — Badge": "Incanto Concerts — Emblema",
    "Kedy — Logo System": "Kedy — Sistema de Logótipo",
    "Stream Media Solutions — Identity": "Stream Media Solutions — Identidade",
    "We Gon Rule — Badge & Merch": "We Gon Rule — Emblema e Merch",
    "Loop — Motion Graphics": "Loop — Motion Graphics",
    "Rimar — Social Short": "Rimar — Short para Redes Sociais",
    "Aegyo Galaxy — K-pop Event": "Aegyo Galaxy — Evento K-pop",
    "Moita — Sports Complex Opening": "Moita — Inauguração do Complexo Desportivo",
    "AHDPP — Association Launch": "AHDPP — Lançamento da Associação",
    "Barreiro — Milhanas Live": "Barreiro — Milhanas ao Vivo",
    "Mentoria ACR — Short 1": "Mentoria ACR — Short 1",
    "Mentoria ACR — Short 2": "Mentoria ACR — Short 2"
  },

  /* Descrições completas (as que aparecem ao abrir o projeto). */
  descriptions: {
    "Motion graphics package built in After Effects, Premiere Pro and Photoshop.":
      "Pacote de motion graphics feito em After Effects, Premiere Pro e Photoshop.",
    "Music short with motion graphics built in After Effects and Premiere Pro, from photography to final animation.":
      "Short musical com motion graphics feitos em After Effects e Premiere Pro, da fotografia à animação final.",
    "Short-form content for Rimar's social channels. Shot on Sony A7 IV, edited in DaVinci Resolve.":
      "Conteúdo curto para as redes sociais da Rimar. Captado em Sony A7 IV, editado em DaVinci Resolve.",
    "Food and drinks short for Mahalo Sushi. Shot on Sony A7 IV, edited and graded in DaVinci Resolve.":
      "Short de comida e bebida para o Mahalo Sushi. Captado em Sony A7 IV, editado e corrigido em DaVinci Resolve.",
    "Menu piece for social media, shot in the restaurant and edited in DaVinci Resolve.":
      "Peça de menu para redes sociais, captada no restaurante e editada em DaVinci Resolve.",
    "Photo-and-video short: stills graded in Lightroom, motion edited in DaVinci Resolve.":
      "Short de foto e vídeo: fotografias corrigidas em Lightroom, imagem em movimento editada em DaVinci Resolve.",
    "Second social piece from the same shoot — one session, several deliverables.":
      "Segunda peça para redes sociais da mesma sessão — uma sessão, várias entregas.",
    "First short of the series, built from the photo shoot to keep photo and video consistent.":
      "Primeiro short da série, construído a partir da sessão fotográfica para manter foto e vídeo coerentes.",
    "K-pop dance event coverage. Shot on Sony A7 IV, edited in DaVinci Resolve.":
      "Cobertura de evento de dança K-pop. Captado em Sony A7 IV, editado em DaVinci Resolve.",
    "Training event for real estate consultants. Shot on Sony A7 IV, edited in DaVinci Resolve.":
      "Evento de formação para consultores imobiliários. Captado em Sony A7 IV, editado em DaVinci Resolve.",
    "Two-day training for real estate consultants. Edited in DaVinci Resolve from a multi-camera set-up.":
      "Formação de dois dias para consultores imobiliários. Editado em DaVinci Resolve a partir de um set multicâmara.",
    "Opening of the Moita sports complex. Gimbal work on Sony A7 IV for local government press.":
      "Inauguração do complexo desportivo da Moita. Trabalho com gimbal em Sony A7 IV para a comunicação da câmara municipal.",
    "Aftermovie of the show Baião de Oxigénio. Gimbal work, Sony A7 IV.":
      "Aftermovie do espetáculo Baião de Oxigénio. Trabalho com gimbal, Sony A7 IV.",
    "Aftermovie of Noite Branca da Moita. Gimbal work, Sony A7 IV.":
      "Aftermovie da Noite Branca da Moita. Trabalho com gimbal, Sony A7 IV.",
    "Press launch of Associação AHDPP. Second camera on a two-camera set-up, Sony A7 IV.":
      "Lançamento para a imprensa da Associação AHDPP. Segunda câmara num set de duas câmaras, Sony A7 IV.",
    "Concert aftermovie for the Municipality of Barreiro. Shot on Sony A7 IV.":
      "Aftermovie de concerto para a Câmara Municipal do Barreiro. Captado em Sony A7 IV.",
    "Village festivities aftermovie for the local parish council. Shot on Sony A7 IV.":
      "Aftermovie das festas da freguesia para a junta local. Captado em Sony A7 IV.",
    "Second piece from the same festivities, cut for social.":
      "Segunda peça das mesmas festas, montada para redes sociais.",
    "Vertical cut of the ACR training event for social media.":
      "Versão vertical do evento de formação ACR para redes sociais.",
    "Second vertical cut from the ACR training event.":
      "Segunda versão vertical do evento de formação ACR.",
    "Music video for the single 26ºDia. Shot on Sony A7 IV, edited in DaVinci Resolve.":
      "Videoclipe do single 26ºDia. Captado em Sony A7 IV, editado em DaVinci Resolve.",
    "Second music video for Mio, from concept and production to the final grade.":
      "Segundo videoclipe dos Mio, do conceito e produção à correção de cor final.",
    "Short musical for social media. Shot and edited in 7 days, delivered in vertical 9:16 for Reels and TikTok.":
      "Short musical para redes sociais. Captado e editado em 7 dias, entregue em vertical 9:16 para Reels e TikTok.",
    "Music video shot on Sony A7 IV and graded in DaVinci Resolve.":
      "Videoclipe captado em Sony A7 IV e corrigido em DaVinci Resolve.",
    "Music video for TraPunKidz. Shot on Sony A7 IV, edited and graded in DaVinci Resolve.":
      "Videoclipe para os TraPunKidz. Captado em Sony A7 IV, editado e corrigido em DaVinci Resolve.",
    "Music video shot on Sony A7 IV, edited in DaVinci Resolve.":
      "Videoclipe captado em Sony A7 IV, editado em DaVinci Resolve.",
    "Studio music video shot on Sony A7 IV, edited in DaVinci Resolve.":
      "Videoclipe de estúdio captado em Sony A7 IV, editado em DaVinci Resolve.",
    "Concert aftermovie at Coliseu dos Recreios. Shot on Sony A7 IV, edited in Premiere Pro.":
      "Aftermovie de concerto no Coliseu dos Recreios. Captado em Sony A7 IV, editado em Premiere Pro.",
    "Concert aftermovie from the London show. Edited in Premiere Pro.":
      "Aftermovie de concerto do espetáculo de Londres. Editado em Premiere Pro.",
    "Concert aftermovie from the Dublin show. Edited in Premiere Pro.":
      "Aftermovie de concerto do espetáculo de Dublin. Editado em Premiere Pro."
  },

  /* Frases que se repetem nas descrições do IN CANTO */
  phrases: [
    ["Directed, shot and edited solo — Sony A7 IV, Blackmagic 6K Studio Pro and GoPro, graded in DaVinci Resolve.",
     "Realizado, captado e editado a solo — Sony A7 IV, Blackmagic 6K Studio Pro e GoPro, com correção de cor em DaVinci Resolve."],
    ["IN CANTO live session with ", "Sessão ao vivo do IN CANTO com "],
    ["Ukrainian musicians based in Lisbon, blending folk and contemporary classical.",
     "músicos ucranianos radicados em Lisboa, entre o folk e o clássico contemporâneo."],
    ["Portuguese singer-songwriter.", "cantautora portuguesa."],
    ["Lisbon-based duo celebrating songbook and poetry.", "duo de Lisboa que celebra o cancioneiro e a poesia."],
    ["Bia Souza's project, roots and modern sounds.", "projeto de Bia Souza, entre raízes e sons modernos."],
    ["original songs crossing Latin and Colombian rhythms.", "temas originais que cruzam ritmos latinos e colombianos."],
    ["quartet playing Anatolian music heritage.", "quarteto que toca a herança musical da Anatólia."],
    ["Lisbon producer mixing electronica, afrobeat and soul.", "produtor de Lisboa que mistura eletrónica, afrobeat e soul."],
    ["Rio de Janeiro singer-songwriter on her Eurotour.", "cantautora do Rio de Janeiro na sua digressão europeia."],
    ["Brazilian singer-songwriter from Minas Gerais.", "cantautor brasileiro de Minas Gerais."],
    ["Brazilian duo with an original sound.", "duo brasileiro com um som original."],
    ["Angolan bassist with a groove-led set.", "baixista angolano com um alinhamento assente no groove."],
    ["Portuguese singer from Minho.", "cantora portuguesa do Minho."]
  ],

  /* Textos gerados por JavaScript */
  ui: {
    all: "Todos",
    project: "projeto",
    projects: "projetos",
    short: "short",
    shorts: "shorts",
    photos: "fotos",
    photo: "foto",
    inProduction: "Em produção",
    looping: "Em loop",
    reelComingSoon: "Showreel a caminho",
    play: "Reproduzir",
    pause: "Pausa",
    watchOn: "Ver no YouTube ↗",
    showreelNote: "O showreel está a ser montado — esta é a imagem de capa.",
    videoSoon: "Vídeo em breve — a imagem de pré-visualização fica visível até à versão final.",
    explore: "Explorar ↗",
    openPhoto: "Abrir fotografia",
    goToPhoto: "Ir para a fotografia",
    fillForm: "Preenche o nome, o email e os detalhes do projeto.",
    badEmail: "Esse email não parece estar correto.",
    openingMail: "A abrir a tua aplicação de email…",
    mailName: "Nome",
    mailEmail: "Email",
    mailProject: "Projeto",
    reelMeta: "Realização · Câmara · Edição · Cor",
    themeDark: "Mudar para o tema escuro",
    themeLight: "Mudar para o tema claro",
    beingCut: "Em montagem neste momento",
    requestReel: "Pedir o showreel completo"
  }
};
