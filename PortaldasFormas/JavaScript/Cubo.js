// Captura o elemento do input para o lado do cubo
const input = document.getElementById('lado-cubo-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-cubo');

// Captura o formulário de cálculo do cubo
const cubeForm = document.getElementById('calculo-cubo');

// Adiciona um listener para o evento de submit do formulário
cubeForm.addEventListener('submit', function (event){
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Calcula a área da superfície do cubo utilizando a fórmula
    let result = 6 * (input.value * input.value);

    // Exibe o resultado da área calculada no elemento de resultado
    showResult.innerHTML = `A área é: ${result}`;
});
