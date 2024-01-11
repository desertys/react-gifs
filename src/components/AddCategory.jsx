import { useState } from "react"

// usamos el formulario vacio para busqueda 

export const AddCategory = ( {onNewCategory}) => {

  const [inputValue, setInputValue] = useState([]);

  const onInputChange = ({target})=>{
   //recogemos los datos del input
    setInputValue(target.value);
  }

  const onSubmit =(event)=>{
    //controlamos no actualice y borre los datos 
    event.preventDefault();

    //comprobamos que el ingreso sea superio a 1
    if(inputValue.trim().length <=1) return; 
        onNewCategory(inputValue.trim());
    setInputValue('');
    //para almacenar realizamos un callback y sus nuevos valores
   // setCategories(categories => [inputValue,...categories]);
    //limpiamos nuestra entrada despues del enter
   
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
      type="text"
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={onInputChange}
    />
    </form>
    
  )
}
