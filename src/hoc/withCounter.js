import React, { useState } from 'react'

function withCounter(Component, incremendtedBy = 1) {
    return function EnhanceComponent(props) {
        const [count, setCount] = useState(0)
        return (
            <>
                <Component
                    count={count}
                    countHandler={() => setCount(count + incremendtedBy)}
                    {...props}
                />
            </>
        )
    }
}

export default withCounter
