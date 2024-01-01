import { useEffect } from 'react';
import {API_OPTIONS} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies
 } from '../utils/moviesSlice';


const useTopRatedMovies
 = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=> store.movies.popularMovies)

  const getMovies = async () => {
    const data  = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRatedMovies
      (json.results))
    // console.log(json.results)
  }
  useEffect(()=> {
    !topRatedMovies && getMovies();
  }, [topRatedMovies, getMovies])
  
}


export default useTopRatedMovies;
