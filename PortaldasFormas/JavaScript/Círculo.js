// Captura o elemento do input para o raio do círculo
const input = document.getElementById('raio-circulo-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-circulo');

// Captura o formulário de cálculo do círculo
const circleForm = document.getElementById('calculo-circulo');

// Adiciona um listener para o evento de submit do formulário
circleForm.addEventListener('submit', function (event){
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Calcula a área do círculo usando a fórmula A = π * r²
    let result = Math.PI * Math.pow(input.value, 2);
    
    // Exibe o resultado da área calculada no elemento de resultado
    showResult.innerHTML = `A área é: ${result.toFixed(2)}`; // Formata o resultado para 2 casas decimais
});
