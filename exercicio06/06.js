let n1= parseFloat(prompt("informe o primeiro numero"))

let n2= parseFloat(prompt("informe o segundo numero"))

let n3= parseFloat(prompt("informe o terceiro numero"))

if (n1== n2 && n2== n3){
    document.write("equilatero")


}else if (n1 != n2 && n2 != n3)
document.write("Escaleno")

else if (n1== n2  || n3){
    document.write("Isosceles")
}
    
