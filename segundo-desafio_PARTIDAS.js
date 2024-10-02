let saldoRankeadas = partidas (50, 15)
let nivel
let nome = "Hero One"
condicoes()

function partidas(vitorias, derrotas){
    soma = (vitorias - derrotas)
    return soma
}

function condicoes (){

    if (saldoRankeadas < 10)
        {(nivel = "Ferro")}

    else if (saldoRankeadas >= 11 && saldoRankeadas <=20) 
        {(nivel = "Bronze")}

    else if (saldoRankeadas >= 21 && saldoRankeadas <= 50)
        {(nivel = "Prata")}

    else if (saldoRankeadas >= 51 && saldoRankeadas <= 80)
        {(nivel = "Ouro")}

    else if (saldoRankeadas >= 81 && saldoRankeadas <= 90)
        {(nivel = "Diamante")}

    else if (saldoRankeadas >= 91 && saldoRankeadas <= 100)
        {(nivel = "Lendário")}

    else
        {(nivel = "Imortal")}
}

console.log("O herói chamado " + nome 
    + " tem um saldo de " + saldoRankeadas + " vitórias"
    + " e está no nível " + nivel + ".")