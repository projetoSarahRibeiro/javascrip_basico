function calcula_imc(event){

    event.preventDeFault(); //evita o evio do formulário

    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = peso/(altura*altura);

    var resultado;

    if(calculo < 18.5){
        resultado = "Você está abaixo do peso:" + calculo
    }
    else if(calculo >= 18.5 && calculo < 24.9){
        resultado = "Você está com o peso normal:" + calculo

    }
    else if(calculo >= 25 && calculo < 29.9){
        resultado ="Você está com obesidade I:" + calculo

    }
    else if(calculo>=30 && calculo < 39.9){
        resultado ="Você está com obesidade II:" + calculo

    }
    else if(calculo >= 40){
        resultado ="Você está com obesidade III:" + calculo
    }

    document.getElementById('resul').innerHTML = resultado;
}