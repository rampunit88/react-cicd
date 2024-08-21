import React from 'react'
import Input from './Input'

function Calculator() {
    return (
        <fieldset>
            <legend>Render Prop Pattern</legend>
            <Input
                renderKelvin={({ value }) => <div className="temp">{value}K</div>}
                renderFahrenheit={({ value }) => <div className="temp">{value}°F</div>}
            />
        </fieldset>
    )
}

export default Calculator
