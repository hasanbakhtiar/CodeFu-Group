import { useState, useEffect } from "react"
import { Container } from "react-bootstrap";

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect running..');
    }, [count])

    return (
        <Container className="mt-5">
            <div>
                {count}
                <button onClick={() => {
                    setCount(count + 1);
                }}>+</button>
            </div>
        </Container>
    )
}

export default Example