import React, { useState, useEffect} from 'react';
import "./src/styles.css";



function TurnScreen() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fakestoreapi.com/docs#p-all'
            );
        
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (        
        <div>
            {items.map(item => (
                <h1 key={item.itemid}>{item.name}</h1>
            ))}
        </div>
    );
}

export default TurnScreen;