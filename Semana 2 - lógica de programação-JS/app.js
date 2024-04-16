let listaDeNumerosSorteados = [];
let quantidadeDeNumerosDisponiveis = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumerosDisponiveis + 1);
   let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeNumerosNaLista == quantidadeDeNumerosDisponiveis){
        listaDeNumerosSorteados = [];   
    }if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute > numeroSecreto){
        exibirTextoNaTela("p","O número secreto é menor");
    }else if(chute < numeroSecreto){
        exibirTextoNaTela("p","O número secreto é maior");
    }else{
        let palavraTentativa = tentativas >1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("h1","Acertou!!");
        exibirTextoNaTela("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }
    tentativas++;
    limparcampo();
}     

function limparcampo(){
    chute = document.querySelector("input");
    chute.value = '';
}
 
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute('disabled', true);
}



