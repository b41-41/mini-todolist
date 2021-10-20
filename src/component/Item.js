import { useState } from 'react';

const Item = ({ item }) => {

    const [isCheck, setIsCheck] = useState(item.isCheck);

    const onChange = () => {
        // setIsCheck(!isCheck);
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
                        value={item.content} />
                </div>
                <div>
                    <button
                        className="deleteBTN"
                        value="delete"
                    >🗑</button>
                </div>
            </div>
        </>
    )
};

export default Item;