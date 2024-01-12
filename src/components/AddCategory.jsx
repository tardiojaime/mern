import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = (event) =>{
        console.log(event.target.value)
        setInputValue(event.target.value)
    }
    const onSumbit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 2) return;
        setCategories((cat)=>[inputValue, ...cat]);
        setInputValue('');
    }
  return (
    <form onSubmit={ (event) => onSumbit(event)}>
    {/* <input onChange={(event)=>onInputChange(event)} type="text" placeholder='Buscar gifs' value={inputValue}/> */}
    <input onChange={onInputChange} type="text" placeholder='Buscar gifs' value={inputValue}/>
    </form>
  )
}

AddCategory.propTypes = {
  
}