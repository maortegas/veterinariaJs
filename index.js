const { registrar, leer } = require("./operaciones.js");

const arg = process.argv.slice(2);
const [operacion, nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad] = arg;


if (operacion === "registrar") {
  if (arg.length<=5){ 
    console.log('Debe de ingresar todos los datos')
    
  }else{
    registrar({ nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad });
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log("No es una funcion");
}

