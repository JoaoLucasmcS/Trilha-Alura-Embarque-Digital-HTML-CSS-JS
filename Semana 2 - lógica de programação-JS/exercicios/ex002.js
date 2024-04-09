function calcularFatorial(numero){
    if(numero == 0 || numero == 1){
        return 1;
    }
    let fatorial = 1;
    for(let i = 2; let <= numero; i++){
        fatorial *=i;
    }
    return fatorial;
}
//Exemplo de uso:
let numero = 3;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);