import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const res = await fetch(
            '${process.env.REACT_APP_API_URL/api/summary}',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ text }),
            }
        );

        const data = await res.json();

        navigate('/summary', { state: {summary: data.summary }})
    }

    return (
        <div>
            <h2>요약 생성기</h2>
            <input
                type="text"
                value={text}
                placeholder="요약할 텍스트 입력"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmit}>요약 생성</button>
        </div>
    );
}

export default Home;