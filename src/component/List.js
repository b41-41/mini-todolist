import '../css/list.css';

const List = () => {
    return (
        <>
            <div className="list__item">
                <div className="list__item--checkbox">
                    <input
                        className="checkbox"
                        type="checkbox" />
                </div>
                <div>
                    <input
                        className="content"
                        type="text" />
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
}

export default List;