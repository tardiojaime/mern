import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function GifExpertApp() {

  const [categories, setCategories] = useState(['Dragon Ball']);
  
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
    //...Desustructuracion
    //setCategories((cat)=>[...cat, 'Pokemon']);
  }
  return (
    <>
    {/* title */}
      <h1>Gif Expert App</h1>
    {/* input */}
    <AddCategory 
    /* setCategories = { setCategories } */
    onNewCategory= { event =>onAddCategory(event)}
    />
    {/* listado de Gif */}
    <ol>
      { categories.map(cate =>(
        <GifGrid key={cate} category={ cate }/>
      ))}
    </ol>
    </>
  )
}

export default GifExpertApp
