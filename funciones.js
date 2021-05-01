/*function init()
{
alert("Bienvenido a la calculadora");
}*/
//function borrar() {
//    document.getElementById('datos-in').reset();
//}


//-------------Esto funciona correctamente--------------------
function cantidad() 
{
    sumatot = document.getElementById('numdatos').value;
    html = "";

    for (var i = 0; i < sumatot; i++)
    {
      html+= "<label>Número " + (i+1) + " </label>   <input type='text' style='width: 100px;' class id='calcular" + i + "'><br><br>";
    }

   html+= "<input type ='button' class='btn btn-success mx-3' onclick='calcular ("+sumatot+")' value = 'Calcular'>";
   html+= "<input type ='button' class='btn btn-danger mx-3' onclick='location.reload()' value = 'Limpiar'>";
    
//   html+= "<input type = 'button' onclick='reset()' value= 'limpiar'>";
    document.getElementById('espacionum').innerHTML = html; //Aqui se meteran las tablas de numeros

}  
//---------------Esto funciona correctamente---------------------------------


function calcular(n)
{
    console.log(n) // para probar si entramos en esta function
    promedio(n);
   varianza(n);
   deviacion();
   valmax(n);
    
   // alert(promedio);
    
}
function promedio(n)
{
    console.log(n) // para probar si entramos en esta function
    suma=0;
    promedio=0;
    x=0;
    for (var i = 0; i < n; i++)
    {
        x=document.getElementById('calcular' + i).value;
        suma+=parseInt(x);
    }
    promedio =suma/n;
    document.getElementById('mediari').innerHTML = promedio;
}

function varianza(n)
{
    console.log(n)
    sumatoriatotal=0;
    desarrollo=0;
    x=0;
    sumatoria=0;
    
    for (var i = 0; i < n; i++)
    {
        x=document.getElementById('calcular' + i).value
        desarrollo=((parseInt(x)-promedio)*(parseInt(x)-promedio))/(n-1)
        sumatoria=sumatoria+desarrollo;
    }
    console.log(sumatoria)
    sumatoriatotal=sumatoria;
    document.getElementById('varian').innerHTML = sumatoriatotal
} 

function deviacion()
{
    desviacionest=0;
    console.log(sumatoriatotal)
    desviacionest = Math.pow(sumatoriatotal, (1/2));
    document.getElementById('desvi').innerHTML = desviacionest
}