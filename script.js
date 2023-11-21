function calcularIdadeEmDias() 
{
  const anos = parseInt(document.getElementById('anos').value);
  const meses = parseInt(document.getElementById('meses').value);
  const dias = parseInt(document.getElementById('dias').value);

  if (isNaN(anos) || isNaN(meses) || isNaN(dias)) 
  {
    alert('Por favor, preencha todos os campos antes de calcular.');
    return;
  }

  const totalDias = anos * 365 + meses * 30 + dias;

  document.getElementById('resultado1').textContent = `Sua idade em dias é: ${totalDias} dias`;
}


function calcularMediaDeNotas() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
 const nota2 = parseFloat(document.getElementById('nota2').value);
 const nota3 = parseFloat(document.getElementById('nota3').value);
 const nota4 = parseFloat(document.getElementById('nota4').value);

 if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
   alert("Os campos de Nota 1, Nota 2 e Nota 3 são obrigatórios e devem ser preenchidos.");
   return;
 }


 const isValidNota4 = !isNaN(nota4);

 
 const maiorNota = isValidNota4 ? Math.max(nota3, nota4) : nota3;


 const media = (nota1 + nota2 + maiorNota) / 3;


 document.getElementById('resultado2').textContent = `A média das notas é: ${media.toFixed(2)}`;
}

document.getElementById('calculateButton').addEventListener('click', calcularMediaDeNotas);



function imprimirNumerosParesEImpares() {
  const numero = parseInt(document.getElementById('numero').value);

  if (!isNaN(numero) && numero >= 1) {
    let pares = [];
    let impares = [];

    for (let i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        pares.push(i);
      } else {
        impares.push(i);
      }
    }

    const resultado = `Números pares: ${pares.join(', ')}<br>Números ímpares: ${impares.join(', ')}`;
    document.getElementById('resultado3').innerHTML = resultado;
  } else {
    document.getElementById('resultado3').textContent = 'Por favor, insira um número válido maior ou igual a 1.';
  }
}

document.getElementById('imprimirBotao3').addEventListener('click', imprimirNumerosParesEImpares);



function verificarLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (isNaN(usuario) || isNaN(senha)) {
    alert("Os campos de Usuário e Senha são obrigatórios e devem ser preenchidos.");
    return;}
    
  if (usuario === 'KUNDEN' && senha === 'KUNDENJS2023') {
    document.getElementById('resultado4').textContent = 'Login efetuado com sucesso.';
  } else {
    document.getElementById('resultado4').textContent = 'Usuário ou senha incorretos. Tente novamente.';
  }
}

document.getElementById('loginBotao').addEventListener('click', verificarLogin);



function validarSenha() {
  const password = document.getElementById('password').value;

  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const noSpaces = !/\s/.test(password);
  const isValidLength = password.length >= 8 && password.length <= 10;

  if (hasNumber && hasLetter && noSpaces && isValidLength) {
    document.getElementById('result').textContent = 'Senha válida.';
  } else {
    let errorMessage = 'Senha inválida.';

    if (!hasNumber) {
      errorMessage += ' A senha deve conter pelo menos um número.';
    }

    if (!hasLetter) {
      errorMessage += ' A senha deve conter pelo menos uma letra.';
    }

    if (!noSpaces) {
      errorMessage += ' A senha não pode conter espaços em branco.';
    }

    if (!isValidLength) {
      errorMessage += ' A senha deve ter entre 8 e 10 caracteres.';
    }

    document.getElementById('result').textContent = errorMessage;
  }
}

document.getElementById('validateButton').addEventListener('click', validarSenha2);



function converterParaCelsius() {
  const fahrenheitEntrada = parseFloat(document.getElementById('fahrenheitEntrada').value);

  if (isNaN(fahrenheitEntrada)) {
    
    alert('Por favor, preencha o campo Fahrenheit antes de converter.');
    return; 
  }

  const celsius = (fahrenheitEntrada - 32) * 5/9;

  document.getElementById('celsiusSaida').textContent = celsius.toFixed(2);
}


document.querySelector('button[data-atividade="6"]').addEventListener('click', converterParaCelsius);



function resolverEquacao() {
  const a = parseFloat(document.getElementById('aEntrada').value);
  const b = parseFloat(document.getElementById('bEntrada').value);
  const c = parseFloat(document.getElementById('cEntrada').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Os campos A, B e C são obrigatórios e devem ser preenchidos.");
    return;}

  const discriminante = b * b - 4 * a * c;

  if (discriminante > 0) {
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    document.getElementById('x1Saida').textContent = x1.toFixed(2);
    document.getElementById('x2Saida').textContent = x2.toFixed(2);
  } else if (discriminante === 0) {
    const x1 = -b / (2 * a);
    document.getElementById('x1Saida').textContent = x1.toFixed(2);
    document.getElementById('x2Saida').textContent = 'Nenhuma raiz real (discriminante igual a zero)';
  } else {
    document.getElementById('x1Saida').textContent = 'Nenhuma raiz real (discriminante negativo)';
    document.getElementById('x2Saida').textContent = 'Nenhuma raiz real (discriminante negativo)';
  }
}

document.querySelector('button[data-atividade="7"]').addEventListener('click', resolverEquacao);



function contarVogaisEspacos() {
  const frase = document.getElementById('frase').value;
  const resultado = document.getElementById('resultado8');

  if (frase.trim() === '') {
    alert('Por favor, preencha o campo de frase antes de contar.');
    return;
  }

  const vogais = frase.match(/[aeiouAEIOU]/g);
  const espacos = frase.match(/\s/g);


  const numVogais = vogais ? vogais.length : 0;
  const numEspacos = espacos ? espacos.length : 0;

  resultado.innerHTML = `Vogais: ${numVogais} <br> Espaços em branco: ${numEspacos}`;
}

document.querySelector('button[data-atividade="8"]').addEventListener('click', contarVogaisEspacos);



function calcularSalarioVendedor() {
  const salarioFixo = parseFloat(document.getElementById('salarioFixo').value);
  const comissaoPorCarro = parseFloat(document.getElementById('comissaoPorCarro').value) / 100;
  const qtdCarrosVendidos = parseInt(document.getElementById('qtdCarrosVendidos').value);
  const valorCarroVendido = parseFloat(document.getElementById('valorCarroVendido').value);
  
  if (isNaN(salarioFixo) || isNaN(comissaoPorCarro) || isNaN(qtdCarrosVendidos) || isNaN(valorCarroVendido)) {
    alert("Todos os campos devem ser preenchidos antes de realizar o cálculo.");
    return;}

  const valorComissao = qtdCarrosVendidos * valorCarroVendido * comissaoPorCarro;
  const valorVendas = qtdCarrosVendidos * valorCarroVendido;

  let valorComissaoExtra = 0;
  if (valorVendas > 99999) {
    valorComissaoExtra = 0.075 * (valorVendas);
  }

  const salarioFinal = salarioFixo + valorComissao + valorComissaoExtra;

  const resultado = document.getElementById('resultado9');
  resultado.innerHTML = `Salário Fixo: R$ ${salarioFixo.toFixed(2)}<br>
                         Comissão: R$ ${valorComissao.toFixed(2)}<br>
                         Comissão Extra: R$ ${valorComissaoExtra.toFixed(2)}<br>
                         Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}

document.querySelector('button[data-atividade="9"]').addEventListener('click', calcularSalarioVendedor);



function separarPalavras() {
  const inputElement = document.getElementById('joioETrigoInput');
  const palavras = inputElement.value.split(',').map(palavra => palavra.trim());

  let listaJoio = [];
  let listaTrigo = [];

  for (let palavra of palavras) {
    if (palavra.toLowerCase() === 'joio') {
      listaJoio.push(palavra);
    } else if (palavra.toLowerCase() === 'trigo') {
      listaTrigo.push(palavra);
    }
  }

  const resultado = document.getElementById('resultado22');
  resultado.innerHTML = `Lista de Joio (${listaJoio.length} palavras): ${listaJoio.join(', ')}<br>`;
  resultado.innerHTML += `Lista de Trigo (${listaTrigo.length} palavras): ${listaTrigo.join(', ')}`;
}



function calcularMontante() {
  const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
  const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
  const tempoInvestimento = parseInt(document.getElementById('tempoInvestimento').value);

  if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoInvestimento)) {
    alert("Todos os campos devem ser preenchidos antes de realizar o cálculo.");
    return;}

  const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoInvestimento);
  const montanteFormatado = montante.toFixed(2);

  const resultado = document.getElementById('resultado11');
  resultado.innerHTML = `Montante: R$ ${montanteFormatado}`;
}

document.querySelector('button[data-atividade="11"]').addEventListener('click', calcularMontante);