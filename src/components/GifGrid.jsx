// import { useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';

// export const GifGrid = ({ category }) => {

//     const [images, setimages] = useState([]);

//     const getImages = async () => {
//         const newImages = await getGifs(category);
//         setimages(newImages);
//     }

//     useEffect(() => {
//         getImages();

//     }, [])

//     getGifs(category);

//     return (
//         <>
//             <h3>{category}</h3>

//             <ol>
//                 <li>titulo</li>
//                 <li>titulo</li>
//                 <li>titulo</li>
//                 <li>titulo</li>
//             </ol>

//         </>
//     )
// }

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }


            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }

            </div>

        </>
    )
}