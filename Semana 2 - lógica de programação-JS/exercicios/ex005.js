function calcularAreaPerimetroSalaCircular(raio){
    let pi = 3.14;
    let area = pi*(raio * raio);
    let perimetro = 2 * pi * raio;
    console.log(`A aréa da sala é ${area.toFixed(2)} metros quadrados.`)
    console.log(`O perímetro da sala é ${perimetro.toFixed(2)} metros.`)
}
//Exemplo de uso:
let raio = 4;
calcularAreaPerimetroSalaCircular(raio);