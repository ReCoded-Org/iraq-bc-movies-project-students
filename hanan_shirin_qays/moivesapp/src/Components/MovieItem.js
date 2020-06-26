

export default function MovieItem(props) {
    let movieList = [];
    movieList = props.map(movie => movie.title);
    console.log("This is Mapped Movie Grid" + `\n` + movieList);
}
