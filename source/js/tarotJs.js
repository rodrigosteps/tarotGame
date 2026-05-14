//baralho de cartas e seus significados
const baralho = [
  {
    carta: "/tarotGame/assets/cartas/Louco.png",
    texto:
      "O Louco, Indica o início de um ciclo. É hora de arriscar em algo novo sem medo de errar, priorizando a liberdade.",
  },

  {
    carta: "/tarotGame/assets/cartas/Mago.png",
    texto:
      "O Mago simboliza o poder da manifestação, habilidade e foco para atingir objetivos.",
  },

  {
    carta: "/tarotGame/assets/cartas/Sacerdotisa.png",
    texto:
      "A Sacerdotisa, Sugere recuo e observação. Não tome decisões agora; confie no seu 'faro' e guarde seus planos em segredo.",
  },

  {
    carta: "/tarotGame/assets/cartas/Imperatriz.png",
    texto:
      "A Imperatriz, Momento de colher frutos e agir com criatividade. Indica que seus projetos têm tudo para crescer e dar lucro.",
  },

  {
    carta: "/tarotGame/assets/cartas/Imperador.png",
    texto:
      "O Imperador, Exige organização e liderança. Coloque ordem na rotina, defina limites claros e aja com autoridade.",
  },

  {
    carta: "/tarotGame/assets/cartas/Hierofante.png",
    texto:
      "O Hierofante, Hora de seguir as regras ou buscar um mentor. O caminho seguro e tradicional é a melhor escolha no momento.",
  },

  {
    carta: "/tarotGame/assets/cartas/Amantes.png",
    texto:
      " Os Amantes, Indica uma encruzilhada. Você precisará escolher entre dois caminhos baseando-se no que você realmente valoriza. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Carro.png",
    texto:
      " O Carro, Significa progresso rápido. Mantenha o foco e a disciplina, pois você tem o controle necessário para vencer. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Justiça.png",
    texto:
      "A Justiça, Alerta para as consequências. Analise os fatos com frieza; o resultado será justo e baseado no que foi plantado.  ",
  },

  {
    carta: "/tarotGame/assets/cartas/Eremita.png",
    texto:
      " O Eremita, Pede uma pausa para reflexão. Afaste-se do barulho externo para encontrar a resposta que já está dentro de você. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Roda.png",
    texto:
      " A Roda da Fortuna, Mostra instabilidade. Esteja pronto para mudanças repentinas; o que está em cima pode descer, e vice-versa. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Força.png",
    texto:
      " A Força, Sugere controle emocional. Use a paciência e o carisma em vez da força bruta para resolver conflitos. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Enforcado.png",
    texto:
      " O Enforcado, Pausa forçada. Não adianta empurrar. Pare, mude sua perspectiva e sacrifique algo pequeno agora para ganhar algo maior depois. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Morte.png",
    texto:
      " A Morte, Corte necessário. Algo chegou ao fim. Pare de insistir no que não funciona mais e abra espaço para o novo que está tentando entrar. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Temperança.png",
    texto:
      " A Temperança, Moderação. Evite extremos. O segredo agora é a paciência e a mistura equilibrada de ideias. Não tenha pressa. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Diabo.png",
    texto:
      " O Diabo, Alerta de vício ou apego. Você está preso a um hábito, desejo ou situação tóxica por escolha própria. Recupere sua autonomia. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Torre.png",
    texto:
      " A Torre, Ruptura brusca. Estruturas instáveis vão cair. Não tente segurar os escombros; deixe o que for velho ir embora para reconstruir do zero. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Estrela.png",
    texto:
      " A Estrela, Esperança ativa. O pior já passou. Mantenha o otimismo, mas continue trabalhando com serenidade para alcançar seus ideais. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Lua.png",
    texto:
      " A Lua, Cuidado com ilusões. Nem tudo é o que parece. Evite decisões baseadas no medo ou em informações confusas. Espere a poeira baixar. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Sol.png",
    texto:
      " O Sol, Sucesso e clareza. O momento é de brilhar e ser honesto. Tudo está iluminado, então aproveite a energia alta para realizar seus planos. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Julgamento.png",
    texto:
      " O Julgamento, Acerto de contas. Hora de avaliar o passado e tomar uma decisão definitiva. Um chamado importante exige uma resposta honesta. ",
  },

  {
    carta: "/tarotGame/assets/cartas/Mundo.png",
    texto:
      " O Mundo, Conclusão de ciclo. Você atingiu seu objetivo. Comemore a vitória e prepare-se, pois você está pronto para um nível superior. ",
  },
];


function Splash() {
  const containerSplash = document.getElementById("cSplahs");
  const container = document.getElementById("Conta");
  const button = document.getElementById('splashButton')
  const footer = document.getElementById('ftr')
  
  // Verificamos se os elementos existem antes de adicionar o evento para evitar erros.
  if (containerSplash && container) {
    
      containerSplash.style.display = "none"; 
      container.style.display = "flex";
      button.style.display = "none"
      footer.style.display = "none"
    
  } else {
    console.error("Erro: Um ou mais elementos do Splash não foram encontrados no HTML.");
  }
}

// Executa a função para que ela fique ativa 
const splashBtn = document.getElementById("splashButton");
splashBtn.addEventListener('click',Splash)

//função para sortear as cartas e mostrar os significados
function pickUp() {
  const audioPlay = document.getElementById("Somdecarta");

  const usuarioPergunta = document.getElementById("Pergunta").value;
  const Play1 = document.querySelector(".cartaflip");
  const Play2 = document.querySelector(".cartaflip2");
  const Play3 = document.querySelector(".cartaflip3");
  const p1 = document.querySelector(".descriçãoCarta1");
  const p2 = document.querySelector(".descriçãoCarta2");
  const p3 = document.querySelector(".descriçãoCarta3");

  //validação com If/Else
  if (usuarioPergunta.trim() !== "") {
    window.scrollTo({ top: 500, behavior: "smooth" });

      
    setTimeout(() => {  //scroll suave para a seção de cartas

      //removendo classe padrão
      Play1.classList.add("deck1Active");
      Play2.classList.add("deck2Active");
      Play3.classList.add("deck3Active");

      //sorteando cartas
      const indice = Math.floor(Math.random() * baralho.length);
      const escolhida = baralho[indice];

      //criando copia para embaralhar
      const baralhoEmbaralhado = [...baralho].sort(() => Math.random() - 0.5);

      const cartaPassado = baralhoEmbaralhado[0];
      const cartaPresente = baralhoEmbaralhado[1];
      const cartaFuturo = baralhoEmbaralhado[2];

      //disabilitando o botão durante a animação
      const btn = document.getElementById("btn");
      btn.disabled = true;
      btn.innerText = "Consultando Oráculo...";
      btn.style.opacity = 0.6;

      //atraso na animação
      setTimeout(() => {
        document.getElementById("CartaPassado").src = cartaPassado.carta;
        document.getElementById("CartaPresente").src = cartaPresente.carta;
        document.getElementById("CartaFuturo").src = cartaFuturo.carta;

        document.getElementById("descriçãoCartaPassado").innerText =
          cartaPassado.texto;
        document.getElementById("descriçãoCartaPresente").innerText =
          cartaPresente.texto;
        document.getElementById("descriçãoCartaFuturo").innerText =
          cartaFuturo.texto;

        p1.classList.add("descriçãoCartaActive");
        p2.classList.add("descriçãoCartaActive");
        p3.classList.add("descriçãoCartaActive");

        //habilitando o botão novamente
        btn.disabled = false;
        btn.innerText = "Nova Leitura";
        btn.style.opacity = 1;

        audioPlay.play();
      }, 870); //fim do atraso da animação
    }, 500); //fim do scroll suave
  }

  //Else para validação da pergunta
  else {
    document.getElementById("Pergunta").placeholder = "Faça Sua Pergunta!!";
  }
}

//trigger do botão
const Escolher = document.getElementById("btn");
Escolher.addEventListener("click", pickUp);

// Seleciona o campo de input onde o usuário digita a pergunta
const enter = document.getElementById("Pergunta");

// Adiciona o evento de "tecla pressionada" ao input
enter.addEventListener("keypress", function(event) {
  // Se a tecla pressionada for Enter
  if (event.key === "Enter") {
    pickUp();
  }
});

