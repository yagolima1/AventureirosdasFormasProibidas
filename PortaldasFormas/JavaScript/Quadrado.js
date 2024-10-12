// Captura o elemento do input do lado do quadrado
const input = document.getElementById('lado-quadrado-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-quadrado');

// Captura o formulário de cálculo do quadrado
const squareForm = document.getElementById('calculo-quadrado');

// Adiciona um listener para o evento de submit do formulário
squareForm.addEventListener('submit', function (event) {
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    
    // Calcula a área do quadrado elevando o lado ao quadrado (lado * lado)
    let result = input.value ** 2;

    // Exibe o resultado da área calculada no elemento de resultado, formatando-o como string
    showResult.innerHTML = `A área é: ${result}`;
});
