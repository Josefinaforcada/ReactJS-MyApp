import ItemCount from './ItemCount';
import { useState } from 'react';

const AppFunction = () => {



    const [stockActual, setStock] = useState(6);

    const restarStock = (e, nuevoStock) =>{

        e.preventDefault();
        setStock((stockActual) => stockActual - nuevoStock);
    }
    return(
    <>
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>
    </>
    );
};

export default AppFunction;