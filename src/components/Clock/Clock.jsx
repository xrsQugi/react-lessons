import { useEffect, useState} from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        console.log('time:>> ', time);
        setInterval(
            () => setTime(new Date().toLocaleTimeString()), 1000
        );
    }, [time])

    return (
        <>
            <p>{time}</p>
        </>
    );
}

