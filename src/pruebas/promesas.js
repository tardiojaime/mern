import { getHeroeById } from "./Heroees";

export const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const p = getHeroeById(id)
            if(p){
                resolve(p)
            }else{
                reject('No se encontrar el heroe')
            }
        }, 1000)
    })
}