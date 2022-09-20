// import { useState } from 'react';

// export const AddCategory = ({ setCategories }) => {

//     const [inputValue, setinputValue] = useState('One Punch');

//     const onInputChange = (event) => {
//         console.log(event.target.value);
//         setinputValue(event.target.value);
//     }
//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (inputValue.trim().lenght <= 1) return;
//         setCategories(categories => [inputValue, ...categories]);
//     }

//     return (
//         <form onSubmit={(event) => onSubmit(event)}>
//             <input type="text"
//                 placeholder='Buscar Gifs'
//                 value={inputValue}
//                 onChange={onInputChange}

//             />
//         </form>
//     )
// }

import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
