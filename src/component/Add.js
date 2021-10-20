import { useState } from 'react';
import '../css/add.css';

const Add = () => {
    const [value, setValue] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3002/todo/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: value
            })
        })
            .then(res => {
                if (res.ok) {
                    console.log(`등록 성공 : ${value}`)
                }
            })

        setValue("");
    }
    const onChange = (e) => {
        const eventValue = e.target.value;
        setValue(eventValue);
    }
    return (
        <>
            <form className="submitForm" onSubmit={onSubmit}>
                <input className="submitText" value={value} onChange={onChange} type="text" placeholder="어떤 계획이 있나요?" autoFocus />
                <button className="submitBTN" value="submit">추가하기</button>
            </form>
        </>
    );
}

export default Add;