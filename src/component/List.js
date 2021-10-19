import { useEffect, useState } from 'react';
import '../css/list.css';

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

    // console.log(items);

    return (
        <>
            <p>해야할 일 : {todos.count}개</p>

            {items.map(item =>
                <div id={item.id} className="list__item">
                    <div className="list__item--checkbox">
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={item.isCheck} />
                    </div>
                    <div>
                        <input
                            className="content"
                            type="text"
                            value={item.content} />
                    </div>
                    <div>
                        <button
                            className="deleteBTN"
                            value="delete"
                        >🗑</button>
                    </div>
                </div>
            )}

        </>
    );
};

export default List;