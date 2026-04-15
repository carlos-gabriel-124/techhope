let pontos = 0;

let perguntas = [
    {
        pergunta: "Quanto é 2 + 2?",
        resposta: "4"
    },
    {
        pergunta: "Quanto é 5 * 3?",
        resposta: "15"
    },
    {
        pergunta: "Qual linguagem usamos no navegador?",
        resposta: "javascript"
    }
];

let atual = 0;

function carregarPergunta() {
    document.getElementById("pergunta").innerText = perguntas[atual].pergunta;
}

function verificar() {
    let respostaUsuario = document.getElementById("resposta").value.toLowerCase();

    if (respostaUsuario == perguntas[atual].resposta) {
        document.getElementById("resultado").innerText = "✅ Correto!";
        pontos += 10;
    } else {
        document.getElementById("resultado").innerText = "❌ Errado!";
    }

    document.getElementById("pontos").innerText = "Pontos: " + pontos;

    atual++;

    if (atual < perguntas.length) {
        setTimeout(() => {
            document.getElementById("resposta").value = "";
            document.getElementById("resultado").innerText = "";
            carregarPergunta();
        }, 1000);
    } else {
        document.getElementById("pergunta").innerText = "Fim do jogo!";
    }
}

carregarPergunta();
