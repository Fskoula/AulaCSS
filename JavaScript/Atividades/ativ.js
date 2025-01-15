//Exibir uma mensagem assim que a pagina abre
alert("Promoção do dia! 50% de desconto em todos os produtos.");

//Exercicio 2- criar um botão que ao clicar mostra uma mensagem ao usuario
function exibirMensage() {
    alert("Você ganhou mais um descontinho! 15% se pagar a vista.");
    //aqui to exibindo essa mensagem para o DEV, mostrando qual método estou usando
    //muito usado para que possamos saber  que esta acontecendo quando no thebug não da pra entender
    console.log("A página executou o métudo exibirMensage")
}

//Exercício 3- criar uma calculadora

function realizarCalculo() {
    let numero1 = 10 , numero2 = 5;
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2); 
}

function somar(valor1, valor2) {
    //operação
    let resultado = valor1 + valor2;
    //exibir no console
    console.log("O resultado da soma entre "+valor1+" e "+valor2+" é: "+resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log("O resultado da subtração entre "+valor1+" e "+valor2+" é: "+resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log("O resultado da divisão entre "+valor1+" e "+valor2+" é: "+resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log("O resultado da multiplicação entre "+valor1+" e "+valor2+" é: "+resultado);
}