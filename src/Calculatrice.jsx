import { useState } from "react";

export default function Calculatrice() {
    const [result, setResult] = useState(0);
    const [value,setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    function isValid() {
        return !isNaN(value) && value!=="";
    }
    function addition(e) {
        e.preventDefault();
        setResult(
            parseFloat(result) + parseFloat(value)
        );
        setValue("");
    }
    function soustraction(e) {
        e.preventDefault();
        setResult(
            parseFloat(result) - parseFloat(value)
        );
        setValue("");
    }
    function multiplication(e) {
        e.preventDefault();
        setResult(
            parseFloat(result) * parseFloat(value)
        );
        setValue("");
    }
    function division(e) {
        e.preventDefault();
        setResult(
            parseFloat(result) / parseFloat(value)
        );
        setValue("");
    }
    function resetAll(e) {
        e.preventDefault();
        setResult(0);
        setValue("");
    }
    function isEqualZero() {
        return value==0 || !isValid();
    }
    return (
        <form>
            <h1>Ma Calculatrice</h1>
            <fieldset>
                <h2>Resultat: {result}</h2>
                <label htmlFor="nombre"></label>
                <input type="number" id="nombre" value={value} onChange={handleChange} placeholder="Enter a number"/>
            </fieldset>
            <fieldset>
                <button onClick={addition} disabled={!isValid()}>Addition</button>
                <button onClick={soustraction} disabled={!isValid()}>Soustraction</button>
                <button onClick={multiplication} disabled={!isValid()}>Multiplication</button>
                <button onClick={division} disabled={isEqualZero()}>Division</button>
                <button onClick={resetAll}>Reset</button>
            </fieldset>
        </form>
    );
}