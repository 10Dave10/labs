// const age = parseInt(prompt("Welcome to Ironhack cinema. How old are you?")); parseinnt convertir a numeros enteros ya que por defecto se guarda como cadena de texto "2""1" es mejor tener 21

let hacker1 = prompt("Ingrese el nombre del conductor:")
let hacker2 = prompt("Ingrese el nombre del navegante:")
console.log(" El nombre del conductor es: " + hacker1);
console.log(" El nombre del navegante es: " + hacker2);
// console.log(`${hacker1.length}`)

if(hacker1.length>hacker2.length)
{
    console.log("El conductor tiene el nombre más largo");
}
else if(hacker1.length<hacker2.length)
{
    console.log("El navegante tiene el nombre más largo");
}
else
{
    console.log(`¡Vaya, ambos tienen nombres igual de largos con ${hacker1.length} caracteres!.`);
}

let Nombredeconductor=" ";
for(let i=0;i < hacker1.length;i++)
{
Nombredeconductor+=hacker1[i]+=" ";
}
console.log(Nombredeconductor.toUpperCase());

let Nombredenavegador=" ";
for(let i=hacker2.length-1; i >= 0 ;i--)
{
    Nombredenavegador+=hacker2[i];
}
console.log(Nombredenavegador);

let orden = hacker1.charAt(0).localeCompare(hacker2.charAt(0) );// me prmite comparar los primeros caracteres(charArt)con la funcion Localecompare

if(orden<0){//sera negativo si la primera palbra viene antes que la segundo
 console.log(`El nombre del conductor va primero. ${hacker1[0]}`);
}
if(orden>0){
    console.log(`Yo, el navegador va primero definitivamente. ${hacker2[0]}`);
}
else{
console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}
