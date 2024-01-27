import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="coming-soon">
                <h1>Coming<br/>Soon</h1>
                <button onClick={goBack}>Back</button>
            </div>
        </>
    )
};

export default ComingSoon;