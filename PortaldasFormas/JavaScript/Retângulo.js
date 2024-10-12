// Captura o elemento do input da largura do retângulo
const WidthInput = document.getElementById('largura-retangulo-input');

// Captura o elemento do input da altura do retângulo
const HeightInput = document.getElementById('altura-retangulo-input');

// Captura o formulário de cálculo do retângulo
const retangleForm = document.getElementById('calculo-retangulo');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-retangulo')

// Adiciona um listener para o evento de submit do formulário
retangleForm.addEventListener('submit', function (event) {
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Calcula a área do retângulo multiplicando a largura pela altura
    let result = WidthInput.value * HeightInput.value;

    // Exibe o resultado da área calculada no elemento de resultado, formatando-o como string
    showResult.innerHTML = `A área é: ${result}`;
});
