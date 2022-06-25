alert =("informe os numeros")

let n1 =parseFloat(prompt("informe o primeiro numero"))

let n2 =parseFloat(prompt("informe o segundo numero"))

let n3 =parseFloat(prompt("informe o terceiro numero"))

if (n1 > n2 && n1 > n3){
    document.write(n1)
    
    
}else if (n2 > n1 && n2 > n3){
    document.write (n2)

}else if (n3 > n1 && n3> n2){
    document.write(n3)

}