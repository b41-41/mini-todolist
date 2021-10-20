import { useState } from 'react';

const Item = ({ item: i }) => {

    const [item, setItem] = useState(i);
    const [isCheck, setIsCheck] = useState(item.isCheck);

    const onDelete = () => {
        if (window.confirm(`삭제하시겠습니까?`)) {
            fetch(`http://localhost:3002/todo/${item.id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    if (res.ok) {
                        setItem({ id: 0 })
                    }
                })
        };
    };

    if (item.id === 0) {
        return null;
    }

    const onChange = () => {
        fetch(`http://localhost:3002/todo/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...item,
                isCheck: !isCheck
            })
        })
            .then(res => {
                if (res.ok) {
                    setIsCheck(!isCheck);
                }
            })
    };

    return (
        <>
            <div id={item.id} className="list__item">
                <div className="list__item--checkbox">
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={isCheck}
                        onChange={onChange} />
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
                        onClick={onDelete}
                    >🗑</button>
                </div>
            </div>
        </>
    )
};

export default Item;