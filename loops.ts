function imprimirNumeros(): void {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

imprimirNumeros();



function contarAte5(): void {
    let contador = 0;

    while (contador !== 5) {
        console.log(contador);
        contador = contador + 1;
    }
}

contarAte5();



function imprimirNomes(): void {
    const nomes: string[] = ["Ana", "Bruno", "Carla"];

    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i]);
    }
}

imprimirNomes();



function somarPrecos(): number {
const precos: number[] = [10, 25, 30, 15];
let total = 0;

for (let preco of precos) {
    total += preco;
}
   return total;
}

console.log(somarPrecos());


function dispararAvisos(): void {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("Aviso " + i);
        }, 1000);
    }
}

dispararAvisos();



function imprimirTriangulo(): void {
    const totalLinhas = 5;

for (let linha = 1; linha <= totalLinhas; linha++) {
    let linhaTexto = "";

    for (let coluna = 1; coluna <= linha; coluna++) {
        linhaTexto += "*";
    }

    console.log(linhaTexto);
 }
}
imprimirTriangulo();



function encontrarPrimeiroPar(): void {
    const numeros: number[] = [7, 9, 11, 8, 15, 4];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        continue;
    }

    console.log("Primeiro par encontrado: " + numeros[i]);
    break;
  }
}

encontrarPrimeiroPar();


function validarCarrinho(): void {
    const carrinho = [
        { nome: "Teclao", quantidadeEstoque: 3 },
        { nome: "Mouse", quantidadeEstoque: 0 },
        { nome: "Monitor", quantidadeEstoque: 5 }
    ];
for (const item of carrinho) {
    if (item.quantidadeEstoque === 0) {
        console.log("Carrinho invalido");
        return;
    }
}
console.log("Carrinho valido");
}
validarCarrinho();



function contagemRegressiva(): void {
    let numero = 3;

    do {
        console.log(numero);
        numero--;
    } while (numero > 0);

    console.log("Fim!");
}

contagemRegressiva();


function calcularProduto(): number {
    const numeros: number[] = [2, 3, 4, 5];
    let produto = 1;

    for (let i = 0; i < numeros.length; i++) {
        produto *= numeros[i];
    }

    return produto;
}

console.log(calcularProduto());



function imprimirTabuadaDe7(): void {
    const numero = 7;

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

imprimirTabuadaDe7();


function removerPares(): void {
    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numeros.splice(i, 1);
            i--;
        }
    }

    console.log(numeros);
}

removerPares();


function percorrerDeTrasParaFrente(): void {
    const numeros: string[] = ["Ana", "Bruno", "Carla", "Daniel"];

    for (let i = numeros.length - 1; i >= 0; i--) {
        console.log(numeros[i]);
    }
}

percorrerDeTrasParaFrente();


function imprimirCoordenadas(): void {
    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            console.log("(" + linha + ", " + coluna + ")");
        }
    }
}

imprimirCoordenadas();



function coletarPares(): void {
    const candidatos: number[] = [1, 3, 5, 7, 9, 11];
    const pares: number[] = [];

    let i = 0;

    while (i < candidatos.length && pares.length < 5) {
        if (candidatos[i] % 2 === 0) {
            pares.push(candidatos[i]);
        }

        i++;
    }

    console.log("Pares encontrados:", pares);
}

coletarPares();


function imprimirNomesComIndice(): void {
    const nomes: string[] = ["Ana", "Bruno", "Carla"];

    for (const [indice, nome] of nomes.entries()) {
        console.log(indice + ": " + nome);
    }
}

imprimirNomesComIndice();


function juntarNomes(): string {
    const nomes: string[] = ["Ana", "Bruno", "Carla"];
    let resultado = "";

    for (let i = 0; i < nomes.length; i++) {
        if (i > 0) {
            resultado += ", ";
        }

        resultado += nomes[i];
    }

    return resultado;
}

console.log(juntarNomes());