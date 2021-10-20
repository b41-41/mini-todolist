import { useState } from 'react';

const Item = ({ item: i }) => {

    const [item, setItem] = useState(i);
    const [isCheck, setIsCheck] = useState(item.isCheck);
    const [isContent, setIsContent] = useState(item.content);

    const onContent = (e) => {
        const eventValue = e.target.value;
        fetch(`http://localhost:3002/todo/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...item,
                content: eventValue
            })
        })
            .then(res => {
                if (res.ok) {
                    setIsContent(eventValue);
                }
            })
    }

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

    if (item.id === 0) {
        return null;
    }

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
                        onChange={onContent}
                        value={isContent} />
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