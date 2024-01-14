import { useState } from "react"
import PropTypes from "prop-types"
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) =>{
        setInputValue(event.target.value)
    }
    const onSumbit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 2) return;
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
  return (
    <form onSubmit={ (event) => onSumbit(event)} aria-label="form" >
    {/* <input onChange={(event)=>onInputChange(event)} type="text" placeholder='Buscar gifs' value={inputValue}/> */}
    <input onChange={onInputChange} type="text" placeholder='Buscar gifs' value={inputValue}/>
    </form>
  )
}
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}