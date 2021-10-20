import { useEffect, useState } from 'react';
import '../css/list.css';
import Item from './Item';

const List = () => {

    const [todos, setTodos] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/todo')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTodos(data);
            })
    }, []);

    useEffect(() => {
        if (todos === []) {
            return;
        }
        setItems(todos);
    }, [todos]);

    return (
        <>
            <p>해야할 일 : {items.length}개</p>
            {items.map(item => <Item key={item.id} item={item} />)}
        </>
    );
};

export default List;