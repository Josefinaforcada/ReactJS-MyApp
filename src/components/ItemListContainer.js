import AppFunction from './AppFunction';
import ItemList from './ItemList';

const ItemListContainer = (props) => (
    <>
        <main className="container-fluid vh-100">
            <h2 className="text-center align-self-center">{props.title}</h2>
            <AppFunction/>
            <ItemList items={props.items}/>
        </main>
    </>
);

export default ItemListContainer;