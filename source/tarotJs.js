
//baralho de cartas e seus significados
const baralho = [
    {
        carta: "/tarotGame/assets/Louco.png",
        texto:
            "O Louco, Indica o início de um ciclo. É hora de arriscar em algo novo sem medo de errar, priorizando a liberdade.",
    },

    {
        carta: "/tarotGame/assets/Mago.png",
        texto:
            "O Mago simboliza o poder da manifestação, habilidade e foco para atingir objetivos.",
    },

    {
        carta: "/tarotGame/assets/Sacerdotisa.png",
        texto:
            "A Sacerdotisa, Sugere recuo e observação. Não tome decisões agora; confie no seu 'faro' e guarde seus planos em segredo.",
    },

    {
        carta: "/tarotGame/assets/Imperatriz.png",
        texto:
            "A Imperatriz, Momento de colher frutos e agir com criatividade. Indica que seus projetos têm tudo para crescer e dar lucro.",
    },

    {
        carta: "/tarotGame/assets/Imperador.png",
        texto:
            "O Imperador, Exige organização e liderança. Coloque ordem na rotina, defina limites claros e aja com autoridade.",
    },

    {
        carta: "/tarotGame/assets/Hierofante.png",
        texto:
            "O Hierofante, Hora de seguir as regras ou buscar um mentor. O caminho seguro e tradicional é a melhor escolha no momento.",
    },

    {
        carta: "/tarotGame/assets/Amantes.png",
        texto:
            " Os Amantes, Indica uma encruzilhada. Você precisará escolher entre dois caminhos baseando-se no que você realmente valoriza. ",
    },

    {
        carta: "/tarotGame/assets/Carro.png",
        texto:
            " O Carro, Significa progresso rápido. Mantenha o foco e a disciplina, pois você tem o controle necessário para vencer. ",
    },

    {
        carta: "/tarotGame/assets/Justiça.png",
        texto:
            "A Justiça, Alerta para as consequências. Analise os fatos com frieza; o resultado será justo e baseado no que foi plantado.  ",
    },

    {
        carta: "/tarotGame/assets/Eremita.png",
        texto:
            " O Eremita, Pede uma pausa para reflexão. Afaste-se do barulho externo para encontrar a resposta que já está dentro de você. ",
    },

    {
        carta: "/tarotGame/assets/Roda.png",
        texto:
            " A Roda da Fortuna, Mostra instabilidade. Esteja pronto para mudanças repentinas; o que está em cima pode descer, e vice-versa. ",
    },

    {
        carta: "/tarotGame/assets/Força.png",
        texto:
            " A Força, Sugere controle emocional. Use a paciência e o carisma em vez da força bruta para resolver conflitos. ",
    },

    {
        carta: "/tarotGame/assets/Enforcado.png",
        texto:
            " O Enforcado, Pausa forçada. Não adianta empurrar. Pare, mude sua perspectiva e sacrifique algo pequeno agora para ganhar algo maior depois. ",
    },

    {
        carta: "/tarotGame/assets/Morte.png",
        texto:
            " A Morte, Corte necessário. Algo chegou ao fim. Pare de insistir no que não funciona mais e abra espaço para o novo que está tentando entrar. ",
    },

    {
        carta: "/tarotGame/assets/Temperança.png",
        texto:
            " A Temperança, Moderação. Evite extremos. O segredo agora é a paciência e a mistura equilibrada de ideias. Não tenha pressa. ",
    },

    {
        carta: "/tarotGame/assets/Diabo.png",
        texto:
            " O Diabo, Alerta de vício ou apego. Você está preso a um hábito, desejo ou situação tóxica por escolha própria. Recupere sua autonomia. ",
    },

    {
        carta: "/tarotGame/assets/Torre.png",
        texto:
            " A Torre, Ruptura brusca. Estruturas instáveis vão cair. Não tente segurar os escombros; deixe o que for velho ir embora para reconstruir do zero. ",
    },

    {
        carta: "/tarotGame/assets/Estrela.png",
        texto:
            " A Estrela, Esperança ativa. O pior já passou. Mantenha o otimismo, mas continue trabalhando com serenidade para alcançar seus ideais. ",
    },

    {
        carta: "/tarotGame/assets/Lua.png",
        texto:
            " A Lua, Cuidado com ilusões. Nem tudo é o que parece. Evite decisões baseadas no medo ou em informações confusas. Espere a poeira baixar. ",
    },

    {
        carta: "/tarotGame/assets/Sol.png",
        texto:
            " O Sol, Sucesso e clareza. O momento é de brilhar e ser honesto. Tudo está iluminado, então aproveite a energia alta para realizar seus planos. ",
    },

    {
        carta: "/tarotGame/assets/Julgamento.png",
        texto:
            " O Julgamento, Acerto de contas. Hora de avaliar o passado e tomar uma decisão definitiva. Um chamado importante exige uma resposta honesta. ",
    },

    {
        carta: "/tarotGame/assets/Mundo.png",
        texto:
            " O Mundo, Conclusão de ciclo. Você atingiu seu objetivo. Comemore a vitória e prepare-se, pois você está pronto para um nível superior. ",
    },
];

//scroll suave para a seção de cartas
document.getElementById("Pergunta").addEventListener("click", function () {

  window.scrollTo({
    top: 500,
    behavior: "smooth"
  });
  
});

const input = document.querySelector(".infoInput");
//animação de zoom in no input da pergunta
input.addEventListener("click", function() {
 input.style.transform = "scale(1.2)";
}) 
//animação de zoom out no input da pergunta
document.getElementById("Pergunta").addEventListener("blur", function() {
  document.querySelector(".infoInput").style.transition = "0.6s ease";
  document.querySelector(".infoInput").style.transform = "scale(1.1)";
}) 

//função para sortear as cartas e mostrar os significados
//consts para pegar os elementos do DOM que serão manipulados
function pickUp() {
    const usuarioPergunta = document.getElementById("Pergunta").value;
    const Play1 = document.querySelector(".cartaflip");
    const Play2 = document.querySelector(".cartaflip2");
    const Play3 = document.querySelector(".cartaflip3");

    //validação com If/Else
    if (usuarioPergunta.trim() !== "") {

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
        const btn = document.querySelector("button");
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
        }, 870);

        //habilitando o botão novamente
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = "Nova Leitura";
            btn.style.opacity = 1;
        }, 1000);
}
    //Else para validação da pergunta
    else {
        document.getElementById("Pergunta").placeholder = "Faça Sua Pergunta!!";
    }
}

//trigger do botão
const Escolher = document.getElementById("btn");
Escolher.addEventListener("click", pickUp);
