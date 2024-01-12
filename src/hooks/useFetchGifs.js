import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newimages = await getGifs(category);
        setimages(newimages);
        setIsLoading(false)
    }
    useEffect(() => {
        getImages();
    }, [])
    return {
        images,
        isLoading
    }
}
