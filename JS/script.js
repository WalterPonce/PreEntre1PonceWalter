console.log("Estas conectado");
let apellidoNombre = prompt("Ingrese apellido y nombre del alumno: ");
if(apellidoNombre === null){
    console.log("Debe ingresar un apellido y nombre.");
}else{
    const isNumber = Number(apellidoNombre);
    if(isNumber.isNaN){
        console.log("El nombre ingresado es: " + apellidoNombre);
    }else{
        console.log("Debe ingresar valores no numéricos");
    }            
    }

    sacarPromedio();

function sacarPromedio() {      
    let promedio = 0;
        for (let i = 1; i <= 3; i++) {
          let nota = prompt("Ingrese la nota " + i + ":");      
          if (isNaN(nota)) {
            console.log("El valor ingresado no es numérico. Intenta de nuevo.");
            return;
          }          
            console.log("Notas ingresadas:" + nota);      
            promedio = promedio + parseFloat(nota);
        }      
        promedio = promedio / 3;
        console.log(`El promedio para el alumno es: ${promedio}`);
      }
      


