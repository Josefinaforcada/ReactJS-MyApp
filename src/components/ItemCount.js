import React from 'react';
import '../ItemCount.css';



const ItemCount = ({stock, initial, onAdd}) => {


    return(
    <>
        
        <section id="counter">
            <form action="">
                <h2>Stock: {stock}</h2>
                <div>
                    <ul className="add-to-cart">
                        <li><a href=""><i className="fas fa-minus"></i></a></li>
                        <li>
                            <label for="cantidad"></label>
                            <input id="cantidad" type="number" name="cantidad" value={initial}/>
                        </li>
                        <li><a href=""><i className="fas fa-plus"></i></a></li>
                    </ul>
                </div>

                <div>
                    <input onClick={(e) => onAdd(e, 1)} className="submit" type="submit" value= "Agregar al carrito"/>
                </div>
            </form>
        </section>
    </>
    )
}

export default ItemCount;