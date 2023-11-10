function calcularIdadeEmDias() {
  const anos = parseInt(document.getElementById('anos').value);
  const meses = parseInt(document.getElementById('meses').value);
  const dias = parseInt(document.getElementById('dias').value);

  const totalDias = anos * 365 + meses * 30 + dias;

  document.getElementById('resultado1').textContent = `Sua idade em dias é: ${totalDias} dias`;
}

function calcularMediaDeNotas() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);

  const maiorNota = Math.max(nota3, nota4);

  const media = (nota1 + nota2 + maiorNota) / 3;

  document.getElementById('resultado2').textContent = `A média das notas é: ${media.toFixed(2)}`;
}

document.getElementById('calcularBotao1').addEventListener('click', calcularIdadeEmDias);
document.getElementById('calcularBotao2').addEventListener('click', calcularMediaDeNotas);

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

  if (usuario === 'KUNDEN' && senha === 'KUNDENJS2023') {
    document.getElementById('resultado4').textContent = 'Login efetuado com sucesso.';
  } else {
    document.getElementById('resultado4').textContent = 'Usuário ou senha incorretos. Tente novamente.';
  }
}

document.getElementById('loginBotao').addEventListener('click', verificarLogin);

function validarSenha() {
  const senha = document.getElementById('senha').value;

  const possuiNumero = /\d/.test(senha);
  const possuiLetra = /[a-zA-Z]/.test(senha);
  const semEspacos = !/\s/.test(senha);
  const possuiTamanhoValido = senha.length >= 8 && senha.length <= 10;

  if (possuiNumero && possuiLetra && semEspacos && possuiTamanhoValido) {
    document.getElementById('resultado5').textContent = 'Senha válida.';
  } else {
    let mensagemErro = 'Senha inválida.';

    if (!possuiNumero) {
      mensagemErro += ' A senha deve conter pelo menos um número.';
    }

    if (!possuiLetra) {
      mensagemErro += ' A senha deve conter pelo menos uma letra.';
    }

    if (!semEspacos) {
      mensagemErro += ' A senha não pode conter espaços em branco.';
    }

    if (!possuiTamanhoValido) {
      mensagemErro += ' A senha deve ter entre 8 e 10 caracteres.';
    }

    document.getElementById('resultado5').textContent = mensagemErro;
  }
}

document.getElementById('validarBotao').addEventListener('click', validarSenha);

function converterParaCelsius() {
  const fahrenheitEntrada = parseFloat(document.getElementById('fahrenheitEntrada').value);

  const celsius = (fahrenheitEntrada - 32) * 5/9;

  document.getElementById('celsiusSaida').textContent = celsius.toFixed(2);
}

document.querySelector('button[data-atividade="6"]').addEventListener('click', converterParaCelsius);

function resolverEquacao() {
  const a = parseFloat(document.getElementById('aEntrada').value);
  const b = parseFloat(document.getElementById('bEntrada').value);
  const c = parseFloat(document.getElementById('cEntrada').value);

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

  const valorComissao = qtdCarrosVendidos * valorCarroVendido * comissaoPorCarro;
  const valorVendas = qtdCarrosVendidos * valorCarroVendido;

  let valorComissaoExtra = 0;
  if (valorVendas > 100000) {
    valorComissaoExtra = 0.075 * (valorVendas - 100000);
  }

  const salarioFinal = salarioFixo + valorComissao + valorComissaoExtra;

  const resultado = document.getElementById('resultado9');
  resultado.innerHTML = `Salário Fixo: R$ ${salarioFixo.toFixed(2)}<br>
                         Comissão: R$ ${valorComissao.toFixed(2)}<br>
                         Comissão Extra: R$ ${valorComissaoExtra.toFixed(2)}<br>
                         Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}

document.querySelector('button[data-atividade="9"]').addEventListener('click', calcularSalarioVendedor);


let joioETrigo = [
    "joio", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio",
    "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo",
    "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio", "joio",
    "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio",
    "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo",
    "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio",
    "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo",
    "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "joio", "joio", "joio",
    "joio", "joio", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio",
    "trigo", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio"
];

function separarPalavras() {
  // Filtrar palavras "joio" e "trigo" do array "joioETrigo"
  const palavrasJoio = joioETrigo.filter(palavra => palavra === "joio");
  const palavrasTrigo = joioETrigo.filter(palavra => palavra === "trigo");

  // Exibir o resultado
  const resultado = `Lista de Joio (${palavrasJoio.length} palavras): ${palavrasJoio.join(", ")}<br>`;
  resultado += `Lista de Trigo (${palavrasTrigo.length} palavras): ${palavrasTrigo.join(", ")}`;
  document.getElementById("resultado10").innerHTML = resultado;
}

// Adicionar um ouvinte de evento ao botão
document.querySelector('[data-atividade="10"]').addEventListener('click', separarPalavras);



function calcularMontante() {
  const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
  const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
  const tempoInvestimento = parseInt(document.getElementById('tempoInvestimento').value);

  const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoInvestimento);
  const montanteFormatado = montante.toFixed(2);

  const resultado = document.getElementById('resultado11');
  resultado.innerHTML = `Montante: R$ ${montanteFormatado}`;
}

document.querySelector('button[data-atividade="11"]').addEventListener('click', calcularMontante);