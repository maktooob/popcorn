import moviesArray from "../data/movies.json"
import Movie from "./Movie";

function Main() {


  return (
    <div>
      {moviesArray.map((element) => {
        return (
          <Movie 
                  title={element.title} 
                  rating={element.rating} 
                  id={element.id} year={element.year} 
                  image={element.imgURL}
                  />
        );
      })}
    </div>
  );
}

export default Main;
