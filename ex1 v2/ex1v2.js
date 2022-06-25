var lista = [0]
lista[0]= parseFloat(prompt("informe a sua primeira nota"))
lista[1]= parseFloat(prompt("informe a sua segunda nota"))
lista[2]= parseFloat(prompt("informe a sua terceira nota"))

var media = (lista[0]+lista[1]+lista[2])/3
document.write('Média:'+media)
