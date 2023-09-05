import { useState } from "react";

function Content(){
    const [countDown, setCountDown] = useState(190)

    setInterval(() => setCountDown(countDown-1),1000);
    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}
export default Content