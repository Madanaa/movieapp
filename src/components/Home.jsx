import { useEffect, useState } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
const Home = () => {
  const [list, setList] = useState();
  let [page] = useState(1)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort
        _by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then(({ data }) => setList(data.results))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div>
       
      <div className="container">
        <div className="grid">
          {list && list.map((movie) => <MovieBox list={movie} />)}
        </div>
       <div className="sidebar">
         <h3 style={{background:"rgb(15, 23, 42)"}}> Discover options </h3>
         <p>Type </p>
         <select className="movies">
  <option value="movie">Movies</option>
  <option value="tvseries">TV Series</option>

  
</select>
<p> Genre </p>
         <select className="genre">
  <option value="action">Action</option>
  <option value="drama">Drama</option>
  <option value="comedy">Comedy</option>
  <option value="thriller">Thriller</option>
  <option value="sci">Sci-Fi</option>
</select>

   <div>
     <p> Rating </p>
   <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
   </div>
        
       </div>

      </div>
    </div>
  );
};

export default Home;
