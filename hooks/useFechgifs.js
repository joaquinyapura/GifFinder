import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFechgifs = (categoria) => {
  const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

  const getImages=async()=>{
    const newImages=await getGifs(categoria);
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, []);
  
    return {
    Images:Images,
    isLoading
  }
}
