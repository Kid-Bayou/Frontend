import { useState } from "react"

function Temperature() {
    const [fahrenheit, setFahrenheit] = useState("");
    const [celsius, setCelsius] = useState("");

    const fahrenheitConverter = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value !== "") {
            setCelsius(((parseFloat(value) - 32) * 5/9));
        } 
        else {
            setCelsius("")
        }
    }

    const celsiusConverter = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (value !== "") {
            setFahrenheit(((parseFloat(value)) * 9/5) + 32);
        } 
        else {
            setFahrenheit("")
        }
    }

    return (
        <>
            <p>Fahrenheit:</p>
            <input type="number" value={fahrenheit} onChange={fahrenheitConverter} />

            
            <p>Celsius:</p>
            <input type="number" value={celsius} onChange={celsiusConverter} />
        </>
    )
}

export default Temperature