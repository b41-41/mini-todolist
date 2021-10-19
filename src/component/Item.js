import { useState } from 'react';

const Item = ({ item }) => {

    const [isCheck, setIsCheck] = useState(item.isCheck);

    const onChange = () => {
        setIsCheck(!isCheck);
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