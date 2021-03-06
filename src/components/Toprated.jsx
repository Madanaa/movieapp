import { useEffect, useState } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
const Toprated = () => {
  const [list, setList] = useState();
  let [page] = useState(1)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&page=${page}`
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
       <div className="sidebar"></div>
      </div>
    </div>
  );
};

export default Toprated;
