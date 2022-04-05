function calcularImc(){
    
    let pesoVar = document.getElementById('peso').value; 
    let alturaVar =  document.getElementById('altura').value;
    let resultadoVar = parseInt(pesoVar) + parseInt(alturaVar);
    document.getElementById('imc').innerHTML = resultadoVar;

    
}

function calcularConversao(){
    let real = document.getElementById('real').value;
    let dol = document.getElementById('dol').value;

    if( real == 0){
        document.getElementById('real').value = dol*5;
    } else if (dol == 0){
        document.getElementById('dol').value = real/5;
    }

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