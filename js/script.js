let inputCarteira = document.querySelector("#icarteira");
let inputPessoaDividida = document.querySelector("#ipessoaDividida");
let displayGorjeta = document.querySelector(".valorGorjeta");
let displayGorjetaDividida = document.querySelector('.gorjetaDividida')
let btnCincoPorcem = document.querySelector(".btnCincoPorce");
let btnDezPorcem = document.querySelector('.btnDezPorce')
let btnQuinzePorcem = document.querySelector('.btnQuinzePorce')
let btnVinteCincoPorcem = document.querySelector('.btnVinteCincoPorce')
let btnCinquentaPorcem = document.querySelector('.btnCinquentaPorce')

let carteiraMultiplicada = (valor, porcem) => {
  return valor * porcem;
};
let carteiraDividida = (valorDividido, valorPessoa) => {
  return valorDividido / valorPessoa;
};

btnCincoPorcem.addEventListener("click", function clicar() {
  let cincoPorce = 0.05;
  
  
  let carteiraValor = parseFloat(inputCarteira.value);
  let valueGorjeta = carteiraMultiplicada(carteiraValor, cincoPorce);
  displayGorjeta.innerHTML = valueGorjeta.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let gorjetaDividida = parseInt(inputPessoaDividida.value);
  let valueGorjetaDividida = carteiraDividida(valueGorjeta , gorjetaDividida)
  displayGorjetaDividida.innerHTML = valueGorjetaDividida.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  

});
btnDezPorcem.addEventListener("click", function clicar() {
  let dezPorcem = 0.1;
  
  
  let carteiraValor = parseFloat(inputCarteira.value);
  let valueGorjeta = carteiraMultiplicada(carteiraValor, dezPorcem);
  displayGorjeta.innerHTML = valueGorjeta.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let gorjetaDividida = parseInt(inputPessoaDividida.value);
  let valueGorjetaDividida = carteiraDividida(valueGorjeta , gorjetaDividida)
  displayGorjetaDividida.innerHTML = valueGorjetaDividida.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  

});
btnQuinzePorcem.addEventListener("click", function clicar() {
    let quinzePorcem = 0.15;
    
    
    let carteiraValor = parseFloat(inputCarteira.value);
    let valueGorjeta = carteiraMultiplicada(carteiraValor, quinzePorcem);
    displayGorjeta.innerHTML = valueGorjeta.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    let gorjetaDividida = parseInt(inputPessoaDividida.value);
    let valueGorjetaDividida = carteiraDividida(valueGorjeta , gorjetaDividida)
    displayGorjetaDividida.innerHTML = valueGorjetaDividida.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    
  
  });
  btnVinteCincoPorcem.addEventListener("click", function clicar() {
    let vinteCincoPorcem = 0.20;
    
    
    let carteiraValor = parseFloat(inputCarteira.value);
    let valueGorjeta = carteiraMultiplicada(carteiraValor, vinteCincoPorcem);
    displayGorjeta.innerHTML = valueGorjeta.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    let gorjetaDividida = parseInt(inputPessoaDividida.value);
    let valueGorjetaDividida = carteiraDividida(valueGorjeta , gorjetaDividida)
    displayGorjetaDividida.innerHTML = valueGorjetaDividida.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    
  
  });
  btnCinquentaPorcem.addEventListener("click", function clicar() {
    let cinquentaPorcem = 0.5;
    
    
    let carteiraValor = parseFloat(inputCarteira.value);
    let valueGorjeta = carteiraMultiplicada(carteiraValor, cinquentaPorcem);
    displayGorjeta.innerHTML = valueGorjeta.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    let gorjetaDividida = parseInt(inputPessoaDividida.value);
    let valueGorjetaDividida = carteiraDividida(valueGorjeta , gorjetaDividida)
    displayGorjetaDividida.innerHTML = valueGorjetaDividida.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    
  
  });
  