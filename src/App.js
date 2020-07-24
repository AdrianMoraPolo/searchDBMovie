import React, { useState } from 'react';
import { Results } from './components/Results';
import './App.css';



  export const App = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    
  
    const onChange = e => {
      e.preventDefault();
  
      setQuery(e.target.value);
  
  
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ea7fb1159d453a78bfc079d161181b5&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
  
        });
    };

  return (


    <div className="App">

      <div className="widthNavbar">
        <table className="navbarMovie">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="logomovie.png" />
              </td>
              <td width="8"></td>
              <td>
                <h3>MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
            <div>
              <input
                className="searcher"
                placeholder="Search"
                value={query}
                onChange={onChange} />
            </div>


            {results.length > 0 && (

              <ul className="results row">
                {results.map((movie) => (
             
                    //Decidí adaptar la web, y que fuese completamente responsive para movil o tablet
                    
                    <li key={movie.id} className="col-md-6 col-lg-3">
                    
                      <Results movie={movie} />
                     
                  </li>
             
                ))}
              </ul>
            )}

    </div>

  );
}

export default App;



