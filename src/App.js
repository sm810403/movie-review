import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async ()=>{
    const data = await axios.get('')

  
  componentDidMount(){
    this.getMovies();

    // setTimeout(()=>{
    //   this.setState({isLoading: false})
    // }, 6000)
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div>{isLoading? 'loading...': 'we are ready'}</div>
    )
  }
}

export default App;
