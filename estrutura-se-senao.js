function acaoBotao(){
    var valor01=0, valor02=0, operacao, resultado=0

    valor01 = prompt ("Digite o primeiro valor: ")
    operacao = prompt ("Digite a operacao: \n Ex: + , - , * , / ")
    valor02 = prompt ("Digite o segundo valor: ")

    if (operacao == '+'){
        resultado = (parseInt (valor01) + parseInt (valor02))
    }
    else if (operacao == '-'){
        resultado = (parseInt (valor01) - parseInt (valor02))
    }
    else if (operacao == '*'){
        (parseInt (valor01) * parseInt (valor02))
    }
    else {
        (parseInt (valor01) / parseInt (valor02))
    }
    document.getElementById ("paragrafo").innerText = ("O resultado eh: " + resultado)
}
