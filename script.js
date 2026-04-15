let pontos = 0; //Criando variável para pontos no valor 0

function verificar() {
    let resposta = document.getElementById("resposta").value;

    if (resposta == "4") {
        document.getElementById("resultado").innerText = "Correto!";
        pontos += 10;
    } else {
        document.getElementById("resultado").innerText = "Tente novamente!";
    }

    document.getElementById("pontos").innerText = "Pontos: " + pontos;
}