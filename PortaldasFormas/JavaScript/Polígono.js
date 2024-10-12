// Captura o elemento do input para o lado do polígono
const input = document.getElementById('lado-poligono-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-poligono');

// Captura o formulário de cálculo do polígono
const polygonForm = document.getElementById('calculo-poligono');

// Captura o elemento de seleção para escolher a forma geométrica
const select = document.getElementById('selecao-formas');

// Adiciona um listener para o evento de submit do formulário
polygonForm.addEventListener('submit', function (event) {
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    let result;

    // Switch para determinar qual fórmula usar com base na forma selecionada
    switch (select.value) {
        
        case 'hexagono':
            // Fórmula para calcular a área do hexágono
            result = (3 * Math.sqrt(3) / 2) * input.value * input.value;
            break;

        case 'octogono':
            // Fórmula para calcular a área do octógono
            result =  2 * (1 + Math.sqrt(2)) * input.value * input.value;
            break;

        case 'triangulo':
            // Fórmula para calcular a área do triângulo equilátero
            result = (Math.sqrt(3) / 4) * (input.value * input.value);
            break;

        default:
            // Caso nenhuma forma válida seja selecionada, o resultado será 0
            result = 0;
            break;
    }
    
    // Exibe o resultado da área calculada no elemento de resultado, formatando-o com duas casas decimais
    showResult.innerHTML = `A área é: ${result.toFixed(2)}`;
});
