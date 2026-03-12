

//função para lançar a animação
const pickUp = () => {
const usuarioPergunta = document.getElementById('Pergunta').value

//validação com If/Else
if (usuarioPergunta !== "" ){    
    
}

else{
    document.getElementById('Pergunta').placeholder = 'Faça Sua Pergunta!!';

}

}


//trigger do botão
document.getElementById('btn').addEventListener('click', pickUp)