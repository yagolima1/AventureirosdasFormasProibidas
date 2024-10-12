// Captura o elemento do input para o comprimento do cuboide
const LengthInput = document.getElementById('comprimento-cuboide-input');

// Captura o elemento do input para a altura do cuboide
const HeightInput = document.getElementById('altura-cuboide-input');

// Captura o elemento do input para a profundidade do cuboide
const DepthInput = document.getElementById('profundidade-cuboide-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-cuboide');

// Captura o formulário de cálculo do cuboide
const cuboidForm = document.getElementById('calculo-cuboide');

// Adiciona um listener para o evento de submit do formulário
cuboidForm.addEventListener('submit', function (event){
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Calcula a área da superfície do cuboide utilizando a fórmula
    let result = 2 * (LengthInput.value * HeightInput.value + LengthInput.value * DepthInput.value + HeightInput.value * DepthInput.value);

    // Exibe o resultado da área calculada no elemento de resultado
    showResult.innerHTML = `A área é: ${result}`;
});
