import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = () =>{
    //setCategories([...categories, 'Valorad'])
    //...Desustructuracion
    setCategories((cat)=>[...cat, 'Pokemon']);
  }
  return (
    <>
    {/* title */}
      <h1>Gif Expert App</h1>
    {/* input */}
    <AddCategory setCategories = { setCategories }/>
    {/* listado de Gif */}
    <ol>
      { categories.map(cate =>{
        return <li key={cate}>{cate}</li>
      })}
    </ol>
    </>
  )
}

export default GifExpertApp
