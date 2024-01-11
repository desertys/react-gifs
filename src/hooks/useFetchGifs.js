import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook es una funcion que regresa algo 
export const useFetchGifs = (category) => {

    const [Images, setImages] = useState([]);
    // logica de cargar las imagenes   
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async() =>{
       const newImages = await getGifs(category);
       
       setImages(newImages);
       setIsLoading(false);
       
    }
   
     useEffect( ()=> {
       getImages();
     }, []);
   

    return {
        images: Images,
        isLoading: isLoading
    }
}
