import React from 'react'

export const Results = ({movie}) => {

  
    
        function handleClick(e) {
          e.preventDefault();
          var x = document.getElementById("card1");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
          var x = document.getElementById("card2");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }

          //Tenía dos posibles opciones, con el routing abrir una pagina con la :id de la pelicula
          // que nos mostrase toda la información o que la card selecionada nos mostrase la info
          // sin necesidad de cambiar de vista
          
        //   Mi objetivo con este código era intercambiar el card de la película que seleccionasemos
        //   para ver la información y que el cartel se volviese translucido y sobre él una sipnosis 
        //   de la pelicula y información variada.
       
        }

    return (
        <div className="result-card card1">
            
           <div className="poster-image">
               {movie.poster_path ? (
                   <img 
                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                   alt={`${movie.title} Poster`}
                   /> 
                   ) : (
                    <div className="text-image"></div>    
                    )}
           </div> 

                <div className="info">
                    <div className="header">
                        <h4 className="title">{movie.title}</h4>
                        {/* Apliqué .substr(0, 4) para mostrar únicamente el año, 
                        puesto que en la API aparecía la fecha completa */}
                        <h5 className="release-date">{movie.release_date.substring(0, 4)}</h5>
                    </div>

                </div>

                <button onClick={handleClick} type="button" className="buttonView" >
                        View
                      </button>

        </div>
    )
}
