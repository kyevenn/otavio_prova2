//1 EXERCICIO

// Verificando se o número e primo ou nao
function isPrime(number) {
      if (number < 2) {return false;}
      if (number === 2) {return true;}
// Verificando se o número e divisível Se não for e primo
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {return false;}}
        return true;}
//percorre todos os números de 1 a 1000, para ver se e primo
      function listPrimes() {let primes = [];
      for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {primes.push(i);}}
        return primes;}
// Exemplo do uso
        console.log(listPrimes());


//2 EXERCICIO

// Verificando o tamanho da senha
function verificarSenha(senha) {
    if (senha.length < 8) {
      return "coloque 8 caracteres";}
// Verificando se tem letra maiúscula
    var regexMaiuscula = /[A-Z]/;
    if (!regexMaiuscula.test(senha)) {
      return "coloque uma letra maiuscula";}
// Verificando se tem letra minuscula
    var regexMinuscula = /[a-z]/;
    if (!regexMinuscula.test(senha)) {
      return "coloque uma letra minuscula";}
// Verificando se tem numero
    var regexNumero = /[0-9]/;
    if (!regexNumero.test(senha)) {
      return "faltou numero";}
// Senha estara funcionando
    return "senha APROVADA meu nobre";}
// Exemplo
    var senha1 = "SonicE621";
    var senha2 = "pacman";
    var senha3 = "MEGAMENTE";
    var senha4 = "vaporeon20";
  
    console.log(verificarSenha(senha1)); // certo
    console.log(verificarSenha(senha2)); // ERRADO
    console.log(verificarSenha(senha3)); // ERRADO
    console.log(verificarSenha(senha4)); // ERRADO
  

//3 EXERCICIO

// Verificando se o número é válido
function calcularFatorial(numero) {
    if (numero < 0 || !Number.isInteger(numero)) {
      return "O número deve ser um inteiro";}
// fatorial de 0 é 1
    if (numero === 0) {
      return 1;}
      let fatorial = 1;
// Calculando o fatorial
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;}
      return fatorial;}
// Exemplos
  for (var n = 1; n <= 10; n++) {
    console.log("Fatorial " + n + ": " + calcularFatorial(n));}
  

//4 EXERCICIO

// Verificando se é inteiro e positivo
function isPerfectSquare(number) {
    if (number < 0 || !Number.isInteger(number)) {
      return false;}
// Calculando a raiz quadrada
    const squareRoot = Math.sqrt(number);
// Verificando se é um número inteiro
    return Number.isInteger(squareRoot);}
// Exemplos
  console.log(isPerfectSquare(25)); // certo
  console.log(isPerfectSquare(16)); // certo
  console.log(isPerfectSquare(0)); // certo
  console.log(isPerfectSquare(621)); // falso
  console.log(isPerfectSquare(-34)); // falso
  console.log(isPerfectSquare(404)); // falso
  