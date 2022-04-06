function calcularImc(){
    let pesoVar = document.getElementById('peso').value; 
    let alturaVar =  document.getElementById('altura').value;
    let resultadoVar = parseFloat(pesoVar) / (parseFloat(alturaVar) * parseFloat(alturaVar)) ; 
    //document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1);

    if (resultadoVar.toFixed(1)<18.5){
        document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1) + ": Abaixo do peso";}
    else if (resultadoVar.toFixed(1)<24.9){
        document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1) + ": Peso normal ou adequado";}
    else if (resultadoVar.toFixed(1)<29.9){
       document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1) + ": Sobrepeso";}
    else if (resultadoVar.toFixed(1)<34.9){
        document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1) + ": Obesidade Grau I";}
    else if (resultadoVar.toFixed(1)<39.9){
        document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1) + ": Obesidade Grau II";}
    else if (resultadoVar.toFixed(1)>40){
        document.getElementById('resultadoImc').innerHTML = resultadoVar.toFixed(1) + ": Obesidade Grau III ou Mórbida";}

    document.getElementById('peso').value = 0;
    document.getElementById('altura').value = 0;

} 



function calcularConversao(){
    let real = document.getElementById('real').value;
    let dol = document.getElementById('dol').value;

    document.getElementById('real').value = dol*5;
    document.getElementById('dol').value = real/5;
    
}

function calcularGasto(){

    let receita = document.getElementById('receita').value;
    let gasto = document.getElementById('gasto').value;
    let total = Number(receita) - Number(gasto) + Number(document.getElementById('total').value) ;

    document.getElementById('total').value = total;
    document.getElementById('receita').value = 0;
    document.getElementById('gasto').value = 0;


}

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}