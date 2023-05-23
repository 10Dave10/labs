// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.



// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors=(moviesArray)=> {
 moviesArray.map((position)=>
 {return console.log( position.director)});
}

// +getAllDirectors(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies= (moviesArray)=> {
  let dramaOFSteve = moviesArray.filter((pelicula)=>{
     
      return pelicula.director === "Steven Spielberg" && pelicula.genre.includes("Drama")
    
  });
  // console.log(dramaOFSteve);
  return dramaOFSteve;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage=(movies)=>{
  let totalScore= movies.reduce((acumulador,valorActual)=>{
    if(valorActual.score){//verifica si hay valor en score de movies
      return acumulador+valorActual.score;
    }
     else// sino devuelve acumilador y ya 
      return acumulador;},0);

      
  let promedio = totalScore / movies.length;
  console.log('Calificacion promedio de las peliculas es: '+ promedio.toFixed(2)); // para fijar solo dos decimales 
  return promedio;
  }

// scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore= (movies)=> {

  let filtracion = movies.filter((drama)=>{
    return drama.genre.includes("Drama");
     });
 let dramaScore= filtracion.reduce((acumulador, valorActual)=>{
    if(valorActual.score){
      return acumulador+=valorActual.score;//recuerda colocar siempre a donde apuntar especificamente, ya que si solo pones valorActual, no sera especificamente en el Score 
    }
    else
    return acumulador;
 },0);
 let valor= dramaScore/filtracion.length;
 return valor.toFixed(2);// dos decimales

}
// si llamaba a "scoresAverage()" despues del filter, es basicamente lo mismo

// console.log('Calificacion promedio de las peliculas de Drama es: '+ dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear=(movies)=>{
  let  Arraycopy=movies.map((peli)=> peli);

  let ordenar= Arraycopy.sort((peliculaa,peliculab)=>
  {
if(peliculaa.year>peliculab.year) return peliculaa.year - peliculab.year; 
if(peliculaa.year<peliculab.year) return peliculaa.year - peliculab.year; 
else return peliculaa.title.localeCompare(peliculab.title);
});
 console.log(ordenar);
 return ordenar;
};


// orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically= (movies)=> {
const tittles=movies.map((pelicula)=>pelicula.title) // mapea de una vpara hacer copia orden alfabetico de solo los title
const filter=tittles.filter((item=> isNaN(item[0])));
filter.sort();
console.log(filter);
return filter;
} 
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
