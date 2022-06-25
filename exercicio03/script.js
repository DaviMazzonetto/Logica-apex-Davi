alert =("Calculadora")

let op =prompt("escolha sua operação")

let valor1 =parseFloat(prompt("Informe o valor 1"))

let valor2 =parseFloat(prompt("informe o valor 2"))

if (op== "+"){
    document.write(valor1 + valor2)
}else if (op=="-"){
    document.write(valor1 - valor2)
}else if (op=="*"){
    document.write(valor1 * valor2)
}else if (op=="/"){
    document.write(valor1 / valor2)
}



