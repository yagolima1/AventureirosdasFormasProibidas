// Captura o elemento do input da base maior do trapezoide
const LargerBaseInput = document.getElementById('baseMaior-trapezoide-input');

// Captura o elemento do input da base menor do trapezoide
const SmallerBaseInput = document.getElementById('baseMenor-trapezoide-input');

// Captura o elemento do input da altura do trapezoide
const HeightInput = document.getElementById('altura-trapezoide-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-trapezoide');

// Captura o formulário do cálculo do trapezoide
const trapezoidForm = document.getElementById('calculo-trapezoide');

// Adiciona um listener para o evento de submit do formulário
trapezoidForm.addEventListener('submit', function (event){

    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Converte o valor da base maior para número decimal (float)
    let baseMaior = parseFloat(LargerBaseInput.value);

    // Converte o valor da base menor para número decimal (float)
    let baseMenor = parseFloat(SmallerBaseInput.value);

    // Converte o valor da altura para número decimal (float)
    let altura = parseFloat(HeightInput.value);

    // Calcula a área do trapezoide usando a fórmula: ((baseMaior + baseMenor) * altura) / 2
    let result = ((baseMaior + baseMenor) * altura) / 2;
    
    // Exibe o resultado no elemento de resultado, formatando-o como string
    showResult.innerHTML = `A área é: ${result}`;
});
