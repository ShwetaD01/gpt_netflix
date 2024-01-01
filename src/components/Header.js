import React, { useEffect } from 'react'

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)


  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }
  const handleGPT = () => {
    dispatch(toggleGptSearchView());

  }
  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unsubscribe();
  }, [dispatch,navigate])

 

  return (
    <div className="fixed w-screen px:0 md:px-8 py-0 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-48 mx-auto pt-[2%] md:mx-0" src={LOGO} alt="logo" />
      <div className='flex justify-between -pt:[5%] md:pt-0 md:m-5'>
        {user  && (<>
        {showGptSearch ? (<select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>): (null)}
          
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGPT} >{showGptSearch ?  "Home Page" : 'GPT Search'}</button>

          <button className='text-white rounded-lg bg-lime-800 py-2 px-4 mx-4 my-2 md:mx-4 ' onClick={handleSignout}>Sign Out</button></>)}

      </div>

    </div>


  )
}


export default Header;
