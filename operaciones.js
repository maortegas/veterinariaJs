const { Console } = require("console");
const fs = require("fs");
let citas = [];

const registrar = (datos) => {

    try{
        citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"))

     }
    catch {
        fs.writeFileSync("citas.json", JSON.stringify([]));
    } 
  
    citas.push(datos);
    fs.writeFileSync("citas.json", JSON.stringify(citas))
  
}

const leer = () => {
    try{
        citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
        console.log('Agenda Vetarinaria');
        console.log("========================");
        citas.forEach((element,index) => {
        
            console.log(`Agenda N°${index+1}
            Nombre: ${element.nombreAnimal}
            Edad: ${element.edad} 
            Tipo: ${element.tipoAnimal}
            Color: ${element.colorAnimal}
            Enfermeda: ${element.enfermedad} `);
            console.log("========================");
        });
    }
    catch(error)
    {   
        console.log("No existe data");
        return []
    }
};

module.exports = {registrar, leer}