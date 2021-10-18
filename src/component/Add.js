import { useState } from 'react';

const Add = () => {
    const [value, setValue] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    const onChange = (e) => {
        const eventValue = e.target.value;
        setValue(eventValue);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={onChange} type="text" placeholder="어떤 계획이 있나요?" autoFocus />
                <button value="submit">추가하기</button>
            </form>
        </>
    );
}

export default Add;