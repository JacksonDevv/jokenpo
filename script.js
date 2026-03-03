// Selecionando elementos do HTML
const buttons = document.querySelectorAll(".buttons button");
const result = document.querySelector(".result");
const yourScoreSpan = document.querySelector(".your-score span");
const machineScoreSpan = document.querySelector(".machine-score span");

// Pontuação
let yourScore = 0;
let machineScore = 0;

// Função que gera escolha aleatória da Alexa
function Maquina() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opcoes[numeroAleatorio];
}

// Função principal do jogo
function jogar(escolhaUsuario) {
    const escolhaAlexa = Maquina();

    if (escolhaUsuario === escolhaAlexa) {
        result.textContent = "🤝 Deu empate!";
    } 
    
    else if (
        (escolhaUsuario === "pedra" && escolhaAlexa === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaAlexa === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaAlexa === "papel")
    ) {
        yourScore++;
        yourScoreSpan.textContent = yourScore;
        result.textContent = "✅ Você ganhou!";
    } 
    
    else {
        machineScore++;
        machineScoreSpan.textContent = machineScore;
        result.textContent = "❌ Você perdeu!";
    }
}

// Adicionando evento de clique nos botões
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const escolhaUsuario = button.id;
        jogar(escolhaUsuario);
    });
});
