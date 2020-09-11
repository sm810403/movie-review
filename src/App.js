import React from 'react';
import axios from 'axios';
import Movie from './Movie';
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
  // componentDidUpdate(){
  //   console.log('I updated')
  // }
  // componentWillUnmount(){
  //   console.log('goodbye cruel world');
  // }
  render(){
    console.log('I am rendering');
    const {isLoading, movies} = this.state;
    return(
      <article>
        {isLoading? (<div>loading...</div>): (<div>{movies.map(movie=>(
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
