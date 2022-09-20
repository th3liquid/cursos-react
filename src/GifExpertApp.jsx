// import React from 'react'
// import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';

// export const GifExpertApp = () => {

//     const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

//     const onAddCategory = ({ newCategory }) => {
//         setCategories(['Valorant', ...categories]);

//     }

//     return (
//         <>
//             <h1>GifExpertApp</h1>
//             {/* input */}
//             <AddCategory onAddCategory={setCategories} />

//             {/* Listado de Gif */}

//             <ol>
//                 {categories.map(category => {
//                     return <li key={category}>{category}</li>
//                 })}
//                 {/* <li>ABC</li>
//                 <li>123</li>
//                 <li>XYZ</li> */}
//             </ol>

//             {/* Gif del item */}
//         </>
//     )
// };


import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }




        </>
    )
}