import { useEffect } from 'react';
import {API_OPTIONS} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
   const getMovies = async () => {
    const data  = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
    // console.log(json.results)
  }
  useEffect(()=> {
    !upcomingMovies && getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
}


export default useUpcomingMovies;
