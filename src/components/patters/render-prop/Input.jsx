import React, { useState } from 'react'

function Input(props) {
    const [value, setValue] = useState("");

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} />
            {props.renderKelvin({ value: value + 273.15 })}
            {props.renderFahrenheit({ value: (value * 9) / 5 + 32 })}
        </div>
    )
}

export default Input
