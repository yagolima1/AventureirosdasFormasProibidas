// Captura o elemento do input da diagonal maior do romboedro
const LargerDiagonalInput = document.getElementById('diagonalMaior-romboedro-input');

// Captura o elemento do input da diagonal menor do romboedro
const SmallerDiagonalInput = document.getElementById('diagonalMenor-romboedro-input'); 

// Captura o elemento do input da altura do romboedro
const HeightInput = document.getElementById('altura-romboedro-input');

// Captura o elemento onde o resultado será exibido
const showResult = document.getElementById('resultado-romboedro');

// Captura o formulário de cálculo do romboedro
const rhombohedronForm = document.getElementById('calculo-romboedro');

// Adiciona um listener para o evento de submit do formulário
rhombohedronForm.addEventListener('submit', function (event){

    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Converte o valor da diagonal maior para número decimal (float)
    let DiagonalMaior = parseFloat(LargerDiagonalInput.value);

    // Converte o valor da diagonal menor para número decimal (float)
    let DiagonalMenor = parseFloat(SmallerDiagonalInput.value);

    // Converte o valor da altura para número decimal (float)
    let altura = parseFloat(HeightInput.value);
    
    // Calcula a área do romboedro usando a fórmula: 2 * ((DiagonalMaior * DiagonalMenor) + (DiagonalMaior * altura) + (DiagonalMenor * altura))
    let result = 2 * ( (DiagonalMaior * DiagonalMenor) + (DiagonalMaior * altura) + (DiagonalMenor * altura) );
    
    // Exibe o resultado da área calculada no elemento de resultado, formatando-o como string
    showResult.innerHTML = `A área é: ${result}`;
});
