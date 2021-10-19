import { useEffect, useState } from 'react';
import '../css/list.css';
import Item from './Item';

const List = () => {

    const [todos, setTodos] = useState({});
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
        if (todos.todoList === undefined) {
            return;
        }
        setItems(todos.todoList);
    }, [todos])

    return (
        <>
            <p>해야할 일 : {todos.count}개</p>

            {items.map(item => <Item id={item.id} item={item} />
            )}

        </>
    );
};

export default List;