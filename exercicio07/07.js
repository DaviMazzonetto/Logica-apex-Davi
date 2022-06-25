let n1= parseFloat(prompt("informe a primeira nota"))

let n2= parseFloat(prompt("informe a segunda nota"))

let n3= parseFloat(prompt("informe a terceira nota"))

let media= (n1 + n2 + n3)/3

let faltas= parseFloat(prompt("informe a quantidade de faltas"))

if (media >=7 && faltas <50){
    document.write("aprovado")
}
else{
    document.write("reprovado")

}



