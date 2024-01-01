import { useEffect } from 'react';
import {API_OPTIONS} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addNowplayingMovies } from '../utils/moviesSlice';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)

  const getMovies = async () => {
    const data  = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addNowplayingMovies(json.results))
  }
  useEffect(()=> {
    !nowPlayingMovies && getMovies();
  }, [nowPlayingMovies, getMovies])
  
}


export default useNowPlayingMovies;
