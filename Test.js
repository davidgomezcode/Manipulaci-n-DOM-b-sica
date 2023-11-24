

let nombre = "David";
let apellido = "Gómez";
let nombreDeUsuarioPlatzi = "David";
let edad = 34;
let email = "davidgomezvillegas1@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 10000;
let deudas = 5000;


const tipoDeSuscripcion = "Basic";


if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

const tipoDeSuscripcion = "Basic";





for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


//Transformar lo anterior a while:
let i = 0;
let e = 10;
while (i<5) {
    console.log("el valor de i es " + i);
    i++
}
while (e>=2) {
    console.log("el valor de i es " + e)
    e--
}





// hacer el loop:
let userInfo = prompt("Cuánto es 2 + 2?")

while (userInfo !== "4") {
    if (userInfo == 4) {
        console.log("Felicitaciones!!")
    }
    else {
        console.log("Lo siento! Intentá de nuevo ome.")
    }
}


let userInfo;

while (userInfo !== "4") {
    userInfo = prompt("Cuánto es 2 + 2?")

    if (userInfo ==  "4") {
        console.log("Felicitaciones!!")
    }
    else {
        console.log("Lo siento! Intentá de nuevo ome.")
    }
}














You are saying a lie. Do you reallize? Yor are still using the breake in the first if. I will ask you different then. How can you do this loop user if you are not allowed to include a breake in the first if, in other words, you are only allowed to change the code in the else block: 

Answer = prompt("Cuánto es 2 + 2?");

if (userAnswer === correctAnswer) {
    console.log("Felicitaciones!!");
} else {
    console.log("Lo siento! Intentá de nuevo, por favor.");
    
}











var correctAnswer = "4";
var userAnswer;

while (userAnswer !== correctAnswer) {
  userAnswer = prompt("Cuánto es 2 + 2?");

  if (userAnswer === correctAnswer) {
    console.log("Felicitaciones!!");
  } else {
    console.log("Lo siento! Intentá de nuevo, por favor.");
  }
};



function impirmirElemento (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}    


function nombreCompleto (name, lastname, nickname) {
    console.log("Mi nombre es " + name + " " + lastname + ", pero prefiero que me digas " + nickname + ".");
}


let nombreCompleto = nombre +" "+ apellido;
let dineroReal = dineroAhorrado - deudas;


function nombreCompleto(name, lastName) {
    return name + " " + lastName
}

function saludo (name, lastname, username) {
    const completeName = nombreCompleto(name,lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".")
}

saludo ("David", "Gómez Villegas", "El Negro")








let respuesta;
while (respuesta != "4") {
    let pregunta = prompt("cuánto es 2 + 2?")
    respuesta = pregunta;
}



const objeto = {
    nombre: "David", 
    edad: 34,
    ComidasFavoritas: ["sushi", "bandeja paisa", "pasta"],
}



function impirmirElementoObjeto (objeto) {   
    let array = Object.values(objeto);
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}    



function validarSuscripcion(tipoDeSuscripcion) {
    if (tipoDeSuscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if (tipoDeSuscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if (tipoDeSuscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } if (tipoDeSuscripcion == "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    console.warn("Ese tipo de suscrición no existe ome!")
}




//bonus con arrays:
let arrayFree = ["Free", "Solo puedes tomar los cursos gratis"];
let arrayBasic = ["Basic", "Puedes tomar casi todos los cursos de Platzi durante un mes"];
let arrayExpert = ["Expert", "Puedes tomar casi todos los cursos de Platzi durante un año"];
let arrayExpertPlus = ["ExpertPlus", "Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

function validarSuscripcion(array) {
    if (array) {
        console.log(array[0]);
        console.log(array[1]);
    }
}
//bonus con objetos:

Object.keys(suscripcionesTodas)[] // este saca el tipo de suscripción.
Object.values(suscripcionesTodas)[] // este saca la descripción del tipo de suscripción. 
Object.entries(suscripcionesTodas)[] // este me saca un array de dos valores, en el primero está el tipo de suscripción y en el segundo está la descripción. Por lo tanto es muy similar a la fomra de arrays que ya logré. 

let suscripcionesTodas = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}
let arrays = Object.entries(suscripcionesTodas);
arrays // me da en consola:
(4) [Array(2), Array(2), Array(2), Array(2)]
0:(2) ['free', 'Solo puedes tomar los cursos gratis']
1:(2) ['basic', 'Puedes tomar casi todos los cursos de Platzi durante un mes']
2:(2) ['expert', 'Puedes tomar casi todos los cursos de Platzi durante un año']
3:(2) ['expertPlus', 'Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año']

let free = arrays[0]
let basic = arrays[1]
let expert = arrays[2]
let expertPlus = arrays[3]

function validarSuscripcion(array) {
    if (array) {
        console.log(array[0]);
        console.log(array[1]);
    }
}




// objetos - forma del profesor 

let tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}




function conseguirTipoDeSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("Este tipo de suscripción no existe.")
}
objeto[key]

tiposDeSuscripciones["free"] // nos da como resultado:
'Solo puedes tomar los cursos gratis'