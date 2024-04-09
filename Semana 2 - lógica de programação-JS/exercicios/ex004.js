function calcularAreaPerimetroSalaRetangular(altura,largura){
    let area = altura * largura;
    let perimetro = (2*altura) + (2*largura);
    
    console.log(`A área da sala é ${area} metros quadrados`);
    console.log(`O perímetro da sala é ${perimetro} metros`);
}
//Exemplo de uso:
let altura = 3;
let largura = 5;
calcularAreaPerimetroSalaRetangular(altura,largura);
