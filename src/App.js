import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async ()=>{
    const {data:{data:{movies}}} = await axios.get('https://cors-anywhere.herokuapp.com/https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({isLoading: false, movies: movies}); 
    console.log(movies) 
  }
  componentDidMount(){
    console.log('mount')
    this.getMovies();
  }
  render(){
    console.log('I am rendering');
    const {isLoading, movies} = this.state;
    return(
      <article className='container'>
        {isLoading? 
        (<div className="loader">
          <span className="loader__text">loading...</span>
        </div>): 
        (<div className="movies">{movies.map(movie=>(
          <Movie 
            key={movie.id} 
            rating={movie.rating} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />
        ))}</div>)}
        
      </article>
    )
  }
}

export default App;
