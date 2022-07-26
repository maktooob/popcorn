
function Movie(props) {
  console.log(props)
        return (
          <div key={props.id}>
            <h2>Title: {props.title}</h2>
            <h3>Rating: {props.rating}</h3>
            <h3>Year: {props.year}</h3>
           {props.image ? true : false}
            <img alt="pic of movie" src={props.image}></img>
          </div>
        );
}

export default Movie;
