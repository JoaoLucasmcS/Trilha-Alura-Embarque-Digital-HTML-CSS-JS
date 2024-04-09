function tabuada(numero){
    for (let i =1; i<=10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
    
}
//Exemplo de uso:
let numero = 7;
tabuada(numero);