import React, { useEffect, useReducer } from 'react'
import { getAll } from '../../services/foodService';
import Thumbnails from '../../Components/Thumbnails/Thumbnails';

const initialState = { foods: [] };

const reducer = (state, action) => {
    switch (action.type) {
      case 'FOODS_LOADED':
        return { ...state, foods: action.payload };
    //   case 'TAGS_LOADED':
    //     return { ...state, tags: action.payload };
      default:
        return state;
    }
  };

export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {foods} = state;
    // const { searchTerm, tag } = useParams();

    useEffect(() => {
        getAll().then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
      },[]);
  return (
    <>
      <Thumbnails foods={foods} />
    </>
  )
}
